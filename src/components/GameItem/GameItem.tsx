import React, { useEffect } from 'react';
import { GameWrapper } from './GameItem.styles';
import Canvas from './Canvas/Canvas';
import Character, { CharacterInterface } from './Character/Character';
import { Score, ScoreInterface } from './utils/Score';
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
  let platformCount = 20; // Общее количество платформ на сцену
  let stepElementsDown: number = 5; // Шаг передвижения элементов вниз (Имитация цикличности)
  let speedGame = 13; // общая скорость игры
  let platforms: PlatformInterface[] = [];
  let person: CharacterInterface;
  let contextLocal: CanvasRenderingContext2D;
  let currentScroll: number = 0;
  let score: ScoreInterface;
  let monsters: any[] = [];

  useEffect(() => {
    return () => {
      cancelAnimationFrame(intervalGameTimer);
    };
  }, []);

  const clearAnimation = () => {
    cancelAnimationFrame(intervalGameTimer);
  };

  const animation = () => {
    contextLocal.clearRect(
      0,
      0,
      contextLocal.canvas.width,
      contextLocal.canvas.height
    );
    contextLocal.fillStyle = '#DFDFDF';
    contextLocal.fillRect(
      0,
      0,
      contextLocal.canvas.width,
      contextLocal.canvas.height
    );
    platforms.forEach((platform: PlatformInterface) => {
      platform.draw();
    });
    monsters.forEach((monster) => {
      monster.draw();
    });

    person.draw();

    currentScroll =
      currentScroll +
      movePlatforms(contextLocal, platforms, person, stepElementsDown);

    score.currentScroll = currentScroll;
    person.currentScroll = currentScroll;

    if (currentScroll % 1000 === 0 && currentScroll !== 0) {
      let monsterJob = new Monster(
        contextLocal,
        platforms[platformCount - 1].left,
        platforms[platformCount - 1].bottom,
        'monster-job.png'
      );
      monsters.push(monsterJob);
    }

    score.draw();
    intervalGameTimer = window.requestAnimationFrame(animation);
    if (monsters.length > 0) {
      moveMonsters(contextLocal, monsters, person, stepElementsDown);
      if (checkMonsterOnPath(person, monsters)) {
        clearAnimation();
        person.gameOver();
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
