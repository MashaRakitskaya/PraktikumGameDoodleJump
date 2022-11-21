import React, { useEffect, useState } from 'react';
import { GameWrapper, ScoreWrapper } from './GameItem.styles.js';
import Canvas from './Canvas/Canvas';
import { Character } from './Character/Character';
import { Score } from './utils/Score';
import { createPlatforms, movePlatforms, Platform } from './Platform/Platform';
import { Monster, moveMonsters, checkMonsterOnPath } from './Monsters/Monster';
import { fullScreenInit, fullScreenCancel } from './utils/FullScreen.js';
import Popup from '../Popup/Popup';
import { Button } from '../Button';
import { Bonuses, checkBonusesOnPath, moveBonuses } from './Bonuses/Bonuses';
import { AudioCustom } from './Audio/AudioCustom';
import { LEADERBOARD_PATH } from '../../utils/constants';

interface soundPlayer {
  madness: AudioCustom;
  background: AudioCustom;
}

const GameItem = () => {
  let intervalGameTimer: number;
  let [isGameOver, setIsGameOver] = useState(false);
  let [gameWidth, setGameWidth] = useState(1600);
  let [gameHeight, setGameHeight] = useState(1080);
  let [isGameInit, setIsGameInit] = useState(false);
  let [currentScore, setCurrentScore] = useState(0);
  let [maxScore, setMaxScore] = useState(0);
  const [isDocumentLoaded, setDocumentLoaded] = useState(false);
  let platformCount = 15; // Общее количество платформ на сцену
  let contextLocal: CanvasRenderingContext2D;
  let currentScroll: number = 0;
  let score: Score;
  let platforms: Platform[] = [];
  let person: Character;
  let monsters: Monster[] = [];
  let bonuses: Bonuses[] = [];
  let elemCanvas: any;
  let currentMonster: Monster | undefined;
  let sound: soundPlayer = {
    madness: new AudioCustom('madnessSound.mp3'),
    background: new AudioCustom('backAudio.mp3')
  };

  useEffect(() => {
    setDocumentLoaded(true);
    return () => {
      cancelAnimationFrame(intervalGameTimer);
    };
  }, [isDocumentLoaded]);

  const clearAnimation = () => {
    cancelAnimationFrame(intervalGameTimer);
  };

  const gameOver = () => {
    clearAnimation();
    setIsGameOver(true);
    sound.background.pause();
    sound.madness.pause();
    person.gameOver();
    fullScreenCancel();
  };

  const closePopup = () => {
    //setIsGameStop(false);
  };

  const dropPersonAnimation = () => {
    person.stop();
    movePlatforms(contextLocal, platforms, -(person.stepY * 3));
    if (monsters.length > 0) {
      moveMonsters(contextLocal, monsters, -(person.stepY * 3));
    }
    if (bonuses.length > 0) {
      moveBonuses(contextLocal, bonuses, -(person.stepY * 3));
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
    if (person.updateSpeedGap === currentScroll) {
      person.speedGame = person.speedGame * 0.95;
      person.updateSpeedGap += 2500;
    }
    //Если первонаж достигает высоты более, чем 1/3 экрана, то двигаем все объекты вниз имитируя бесконечный спавн
    while (person.posY < contextLocal.canvas.height / 3) {
      person.posY += person.stepY;
      if (monsters.length > 0) {
        moveMonsters(contextLocal, monsters, person.stepY);
      }
      if (bonuses.length > 0) {
        moveBonuses(contextLocal, bonuses, person.stepY);
      }

      //Изменение текущего score с учетом "прокрутки"

      currentScroll =
        currentScroll + movePlatforms(contextLocal, platforms, person.stepY);

      score.currentScroll = currentScroll;
      person.currentScroll = currentScroll;
      setCurrentScore(currentScroll);
    }

    /*
    /Описание частоты появления сущнойстей и их инициализация
    */

    if (
      currentScroll % 400 === 0 &&
      currentScroll >= 400 &&
      !person.isHaveBonus &&
      !platforms[platformCount - 1]?.isHaveItem
    ) {
      let monsterJob = new Monster(
        contextLocal,
        platforms[platformCount - 1].left,
        platforms[platformCount - 1].bottom,
        'monster-job.png'
      );
      platforms[platformCount - 1].isHaveItem = true;
      monsterJob.jump();
      monsters.push(monsterJob);
    }
    if (
      currentScroll % 1100 === 0 &&
      currentScroll >= 1000 &&
      !person.isHaveBonus &&
      !platforms[platformCount - 1]?.isHaveItem
    ) {
      let monsterAkadem = new Monster(
        contextLocal,
        platforms[platformCount - 1].left,
        platforms[platformCount - 1].bottom,
        'blackHole.png'
      );
      monsterAkadem.jump();
      platforms[platformCount - 1].isHaveItem = true;
      monsters.push(monsterAkadem);
    }

    if (
      currentScroll % 1800 === 0 &&
      currentScroll >= 1800 &&
      !person.isHaveBonus &&
      !platforms[platformCount - 1]?.isHaveItem
    ) {
      let bonusesStackOverflow = new Bonuses(
        contextLocal,
        platforms[platformCount - 1].left,
        platforms[platformCount - 1].bottom,
        'bonuses-stackoverflow.png',
        70,
        150,
        3300,
        person.currentScroll
      );
      platforms[platformCount - 1].isHaveItem = true;
      bonuses.push(bonusesStackOverflow);
    }

    score.draw();
    intervalGameTimer = window.requestAnimationFrame(animation);
    // Проверка на наличие "Соприкосновения" персонажа с монстром (Если да - игра заканчивается)
    currentMonster = checkMonsterOnPath(person, monsters);
    if (currentMonster && !currentMonster.isDead) {
      if (
        !person.isJumping &&
        person.posX + person.width / 3 > currentMonster.posX &&
        person.posX + person.width / 3 <
          currentMonster.posX + currentMonster.width
      ) {
        if (!currentMonster.isDead) {
          currentMonster.isDead = true;
          currentMonster.death(monsters);
        }
      } else {
        gameOver();
      }
    }
    // Проверка истекания действия бонуса (Пока что пробная версия)
    if (person.isHaveBonus) {
      if (bonuses[0].checkExpired(currentScroll, person)) {
        bonuses[0].resetSkillCharacter(person);
        bonuses = [];
        sound.background.resume();
        sound.madness.pause();
        person.isHaveBonus = false;
      }
    }
    // Проверка на наличие "Соприкосновения" персонажа с Бонусом (Если да - происходит изменение параметров персонажа)
    if (bonuses.length > 0) {
      if (checkBonusesOnPath(person, bonuses) && !person.isHaveBonus) {
        sound.background.pause();
        sound.madness.play();
        bonuses[0].updateSkillCharacter(person, 'character-bonus.png');
        person.isHaveBonus = true;
      }
    }

    //Если персонаж опускается за пределы нижней границы канваса - проигрваем анимацию окончания игры
    if (person.posY + person.height > contextLocal.canvas.height) {
      if (platforms.length > 0) {
        dropPersonAnimation();
      } else {
        if (currentScroll > maxScore) {
          setMaxScore(currentScroll);
        }
        gameOver();
      }
    }
  };

  const draw = (context: CanvasRenderingContext2D) => {
    elemCanvas = document.getElementById('Game');
    contextLocal = context;
    if (isGameInit && !isGameOver) {
      sound.background.play();
      platforms = createPlatforms(contextLocal, platformCount);

      //Изначальная высота по x, y для персонажа берется относительно 2-ой созданной платформы
      //Обходимся без проверки т.к. платформ меньше 10 изначально быть не может
      person = new Character(
        contextLocal,
        platforms[1].bottom,
        platforms[1].left
      );

      score = new Score(contextLocal, 40, 40);

      animation();

      person.jump(platforms);

      elemCanvas.requestPointerLock();
      fullScreenInit(elemCanvas);
      document.addEventListener('keydown', (event) => {
        person.controllerStart(event);
      });
      document.addEventListener('keyup', (event) => {
        person.controllerReset();
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

  const displayMaxScore = () => {
    return (
      <div>
        Ваш текущий рекорд: <strong>{maxScore}</strong>
      </div>
    );
  };

  return (
    <GameWrapper>
      <Canvas
        isDocumentLoaded={isDocumentLoaded}
        draw={draw}
        play={isGameInit && !isGameOver}
        height={isDocumentLoaded ? gameHeight : 0}
        width={isDocumentLoaded ? gameWidth : 0} //500 - пока что произвольная величина
      />

      {isDocumentLoaded && (
        <>
          <Popup
            isOpen={isGameOver}
            title={'Конец игры!'}
            closePopup={closePopup}
            isOverlayAndCloseButton={false}
          >
            <div>
              <ScoreWrapper>{displayScore()}</ScoreWrapper>
              <Button
                onClick={() => {
                  setIsGameOver(false);
                }}
                buttonText={'Начать игру!'}
                type={'button'}
              />
              <Button
                onClick={() => {
                  document.location.href = LEADERBOARD_PATH;
                }}
                buttonText={'Выйти!'}
                type={'button'}
              />
            </div>
          </Popup>
          <Popup
            isOpen={!isGameInit}
            title={'Doodlik Aka start!'}
            closePopup={closePopup}
            isOverlayAndCloseButton={false}
          >
            <div>
              <ScoreWrapper>{displayMaxScore()}</ScoreWrapper>
              <Button
                onClick={() => {
                  setIsGameOver(false);
                  setIsGameInit(true);
                }}
                buttonText={'Начать игру!'}
                type={'button'}
              />
              <Button
                onClick={() => {
                  document.location.href = LEADERBOARD_PATH;
                }}
                buttonText={'Выйти!'}
                type={'button'}
              />
            </div>
          </Popup>
        </>
      )}
    </GameWrapper>
  );
};

export default GameItem;
