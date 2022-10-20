import React, { useEffect, useState } from 'react';
import { GameWrapper, ScoreWrapper } from './GameItem.styles';
import Canvas from './Canvas/Canvas';
import { Character } from './Character/Character';
import { Score } from './utils/Score';
import { createPlatforms, movePlatforms, Platform } from './Platform/Platform';
import { Monster, moveMonsters, checkMonsterOnPath } from './Monsters/Monster';
import { initFullScreenAPI } from './utils/FullScreen';
import Popup from '../Popup/Popup';
import { Button } from '../Button';
import { Bonuses, checkBonusesOnPath, moveBonuses } from './Bonuses/Bonuses';

const GameItem = () => {
  let intervalGameTimer: number;
  let [isGameOver, setIsGameOver] = useState(false);
  let [currentScore, setCurrentScore] = useState(0);
  let isHaveBonus: boolean = false;
  let platformCount = 15; // Общее количество платформ на сцену
  let stepElementsDown: number = 5; // Шаг передвижения элементов вниз (Имитация цикличности)
  let speedGame = 13; // общая скорость игры
  let platforms: Platform[] = [];
  let person: Character;
  let contextLocal: CanvasRenderingContext2D;
  let currentScroll: number = 0;
  let score: Score;
  let monsters: Monster[] = [];
  let bonuses: Bonuses[] = [];

  useEffect(() => {
    return () => {
      cancelAnimationFrame(intervalGameTimer);
    };
  }, []);

  const clearAnimation = () => {
    cancelAnimationFrame(intervalGameTimer);
  };

  const gameOver = () => {
    clearAnimation();
    person.gameOver();
    showPopup();
  };
  const closePopup = () => {
    setIsGameOver(false);
  };

  const showPopup = () => {
    setIsGameOver(true);
  };

  const closeByOverlay = (
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    const id = (event.target as HTMLDivElement).id;
    if (id === 'popup') {
      closePopup();
    }
  };

  const dropPersonAnimation = () => {
    person.stop();
    movePlatforms(contextLocal, platforms, person, -(stepElementsDown * 3));
    if (monsters.length > 0) {
      moveMonsters(contextLocal, monsters, person, -(stepElementsDown * 3));
    }
    if (bonuses.length > 0) {
      moveBonuses(contextLocal, bonuses, person, -(stepElementsDown * 3));
    }
  };

  const clearAndRedrawAllObjects = () => {
    contextLocal.clearRect(
      0,
      0,
      contextLocal.canvas.width,
      contextLocal.canvas.height
    );
    platforms.forEach((platform: Platform) => {
      platform.draw();
    });
    monsters.forEach((monster) => {
      monster.draw();
    });

    bonuses.forEach((bonus) => {
      bonus.draw();
    });

    person.draw();
  };

  const animation = () => {
    clearAndRedrawAllObjects();
    //Если первонаж достигает высоты более, чем 1/3 экрана, то двигаем все объекты вниз имитируя бесконечный спавн
    if (person.posY < contextLocal.canvas.height / 3) {
      person.posY += stepElementsDown;
      currentScroll =
        currentScroll +
        movePlatforms(contextLocal, platforms, person, stepElementsDown);
      if (monsters.length > 0) {
        moveMonsters(contextLocal, monsters, person, stepElementsDown);
      }
      if (bonuses.length > 0) {
        moveBonuses(contextLocal, bonuses, person, stepElementsDown);
      }
    }

    score.currentScroll = currentScroll;
    person.currentScroll = currentScroll;
    setCurrentScore(currentScroll);

    if (currentScroll % 1000 === 0 && currentScroll >= 1000) {
      let monsterJob = new Monster(
        contextLocal,
        platforms[platformCount - 1].left,
        platforms[platformCount - 1].bottom,
        'monster-job.png'
      );
      monsters.push(monsterJob);
    }
    if (currentScroll % 1700 === 0 && currentScroll >= 2000) {
      let monsterAkadem = new Monster(
        contextLocal,
        platforms[platformCount - 1].left,
        platforms[platformCount - 1].bottom,
        'blackHole.png'
      );
      monsters.push(monsterAkadem);
    }

    if (currentScroll % 500 === 0 && currentScroll >= 100) {
      let bonusesStackOverflow = new Bonuses(
        contextLocal,
        platforms[platformCount - 1].left,
        platforms[platformCount - 1].bottom,
        'bonuses-stackoverflow.png',
        70,
        120,
        300,
        person.currentScroll
      );
      bonuses.push(bonusesStackOverflow);
    }

    score.draw();
    intervalGameTimer = window.requestAnimationFrame(animation);
    // Проверка на наличие "Соприкосновения" персонажа с монстром (Если да - игра заканчивается)
    if (checkMonsterOnPath(person, monsters)) {
      gameOver();
    }

    if (checkBonusesOnPath(person, bonuses)) {
      if (!isHaveBonus) {
        stepElementsDown = stepElementsDown * 0.8;
        bonuses[0].updateSkillCharacter(person, 'character-bonus.png');
        isHaveBonus = true;
      }
    }

    //Если персонаж опускается за пределы нижней границы канваса - проигрваем анимацию окончания игры
    if (person.posY + person.height > contextLocal.canvas.height) {
      if (platforms.length > 0) {
        dropPersonAnimation();
      } else {
        gameOver();
      }
    }
  };

  const draw = (context: CanvasRenderingContext2D) => {
    contextLocal = context;

    if (!isGameOver) {
      platforms = createPlatforms(contextLocal, platformCount);
      //Изначальная высота по x, y для персонажа берется относительно 2-ой созданной платформы
      //Обходимся без проверки т.к. платформ меньше 10 изначально быть не может
      person = new Character(
        contextLocal,
        platforms[1].bottom,
        speedGame,
        platforms[1].left
      );
      score = new Score(contextLocal, 40, 40);
      animation();

      person.jump(platforms);
      initFullScreenAPI();
      document.addEventListener('keydown', (event) => {
        person.controllerStart(event);
      });
      document.addEventListener('keyup', (event) => {
        person.controllerReset(event);
      });
    }
  };

  const displayScore = () => {
    return (
      <div>
        Ваш счет: <strong>{currentScore}</strong>
      </div>
    );
  };

  return (
    <GameWrapper>
      <Canvas
        draw={draw}
        height={document.documentElement.clientHeight}
        width={document.documentElement.clientWidth - 300} //500 - пока что произвольная величина
      />
      <Popup
        isOpen={isGameOver}
        closeByOverlay={closeByOverlay}
        title={'Game over!'}
        closePopup={closePopup}
      >
        <div>
          <ScoreWrapper>{displayScore()}</ScoreWrapper>
          <Button
            onCLickFunc={() => {
              window.location.reload();
            }}
            buttonText={'New game'}
            type={'button'}
          />
        </div>
      </Popup>
    </GameWrapper>
  );
};

export default GameItem;
