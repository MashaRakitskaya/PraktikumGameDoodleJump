import React, { useEffect } from 'react';
import { GameWrapper } from './GameItem.styles';
import Canvas from './Canvas/Canvas';
import Character, { CharacterInterface } from './Character/Character';
import { Score, ScoreInterface } from '../GameItem/utils/Score';
import {
  createPlatforms,
  movePlatforms,
  PlatformInterface
} from './Platform/Platform';

function GameItem() {
  let intervalGameTimer: number;
  let isGameOver = false;
  let platformCount = 20; // Общее количество платформ на сцену
  let stepPlatformsDown: number = 5; // Шаг передвижения платформ вниз (Имитация цикличности)
  let speedGame = 10; // общая скорость игры
  let platforms: PlatformInterface[] = [];
  let person: CharacterInterface;
  let contextLocal: CanvasRenderingContext2D;
  let currentScroll: number = 0;
  let score: ScoreInterface;

  useEffect(() => {
    return () => {
      clearInterval(intervalGameTimer);
    };
  }, []);

  const animation = () => {
    contextLocal.clearRect(
      0,
      0,
      contextLocal.canvas.width,
      contextLocal.canvas.height
    );
    platforms.forEach((platform: PlatformInterface) => {
      platform.draw();
    });
    person.draw();
    currentScroll =
      currentScroll +
      movePlatforms(contextLocal, platforms, person, stepPlatformsDown);
    score.currentScroll = currentScroll;
    person.currentScroll = currentScroll;
    score.draw();
    intervalGameTimer = window.requestAnimationFrame(animation);
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
        width={document.documentElement.clientWidth - 500} //500 - пока что произвольная величина
      />
    </GameWrapper>
  );
}

export default GameItem;
