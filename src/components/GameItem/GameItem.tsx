import React, { useEffect, useState } from 'react';
import { GameWrapper } from './GameItem.styles.js';
import Canvas from './Canvas/Canvas';
import Character from './Character/Character';
import {
  createPlatforms,
  movePlatforms,
  PlatformInterface
} from './Platform/Platform';

const GameItem = () => {
  const [isDocumentLoaded, setDocumentLoaded] = useState(false);
  let intervalGameTimer: NodeJS.Timeout | undefined;

  const draw = (context: CanvasRenderingContext2D) => {
    let isGameOver = false;
    let platformCount = 20; // Общее количество платформ на сцену
    let platforms: PlatformInterface[] = [];
    let stepPlatformsDown: number = 5; // Шаг передвижения платформ вниз (Имитация цикличности)
    let speedGame = 5; // общая скорость игры

    if (!isGameOver) {
      platforms = createPlatforms(context, platformCount);
      //Изначальная высота по x, y для персонажа берется относительно 2-ой созданной платформы
      //Обходимся без проверки т.к. платформ меньше 10 изначально быть не может
      const person = new Character(
        context,
        platforms[1].bottom,
        speedGame,
        platforms[1].left
      );

      intervalGameTimer = setInterval(() => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        platforms.forEach((platform: PlatformInterface) => {
          platform.draw();
        });
        person.draw();
        movePlatforms(context, platforms, person, stepPlatformsDown);
      }, speedGame);

      person.jump(platforms);

      if (isDocumentLoaded)
        document.addEventListener('keydown', (event) => {
          person.controller(event);
        });
    }
  };

  useEffect(() => {
    setDocumentLoaded(true);
    return () => {
      clearInterval(intervalGameTimer);
    };
  }, [isDocumentLoaded]);

  return (
    <GameWrapper>
      <Canvas
        isDocumentLoaded={isDocumentLoaded}
        draw={draw}
        height={isDocumentLoaded ? document.documentElement.clientHeight : 0}
        width={
          isDocumentLoaded ? document.documentElement.clientWidth - 500 : 0
        } //500 - пока что произвольная величина
      />
    </GameWrapper>
  );
};

export default GameItem;
