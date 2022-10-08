import React, { useEffect } from 'react';
import { GameWrapper } from './GameItem.styles';
import Canvas from './Canvas/Canvas';
import Character, { CharacterInterface } from './Character/Character';
import { Score, ScoreInterface } from './utils/Score';
import { Backgound } from './utils/Backgound'
import {
  createPlatforms,
  movePlatforms,
  PlatformInterface
} from './Platform/Platform';
import { Monster, moveMonsters, checkMonsterOnPath } from './Monsters/Monster';
import { initFullScreenAPI } from './utils/FullScreen';

const GameItem = () => {
  let intervalGameTimer: number;
  let isGameOver = false;
  let platformCount = 15; // Общее количество платформ на сцену
  let stepElementsDown: number = 5; // Шаг передвижения элементов вниз (Имитация цикличности)
  let speedGame = 13; // общая скорость игры
  let platforms: PlatformInterface[] = [];
  let person: CharacterInterface;
  let contextLocal: CanvasRenderingContext2D;
  let currentScroll: number = 0;
  let score: ScoreInterface;
  let monsters: any[] = [];
  let backgroundMatrix: any;

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
  }

  const dropPersonAnimation = () => {
    person.stop();
    movePlatforms(contextLocal, platforms, person, -(stepElementsDown));
    if(monsters.length > 0) {
      moveMonsters(contextLocal, monsters, person, -(stepElementsDown));
    }
  }

  const clearAndRedrawAllObjects = () => {
    contextLocal.clearRect(
        0,
        0,
        contextLocal.canvas.width,
        contextLocal.canvas.height
    );
    backgroundMatrix.run();
    platforms.forEach((platform: PlatformInterface) => {
      platform.draw();
    });
    monsters.forEach((monster) => {
      monster.draw();
    });

    person.draw();
  }

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
    }

    score.currentScroll = currentScroll;
    person.currentScroll = currentScroll;

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

    score.draw();
    intervalGameTimer = window.requestAnimationFrame(animation);
    // Проверка на наличие "Соприкосновения" персонажа с монстром (Если да - игра заканчивается)
    if (checkMonsterOnPath(person, monsters)) {
      gameOver();
    }
    //Если персонаж опускается за пределы нижней границы канваса - проигрваем анимацию окончания игры
    if (person.posY + person.height > contextLocal.canvas.height) {
      if(platforms.length > 0){
        dropPersonAnimation()
      } else {
        gameOver();
      }

    }
  };

  const draw = (context: CanvasRenderingContext2D) => {
    contextLocal = context;

    if (!isGameOver) {
      backgroundMatrix = new Backgound(contextLocal, contextLocal.canvas.height, contextLocal.canvas.width);
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

      person.jump(platforms, monsters);
      initFullScreenAPI();
      document.addEventListener('keydown', (event) => {
        person.controller(event);
      });
    }
  };
  return (
    <GameWrapper>
      <Canvas
        draw={draw}
        height={document.documentElement.clientHeight}
        width={document.documentElement.clientWidth - 300} //500 - пока что произвольная величина
      />
    </GameWrapper>
  );
};

export default GameItem;
