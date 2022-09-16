import React, { useEffect } from 'react';
import { GameWrapper } from './GameItem.styles';
import Canvas from './Canvas/Canvas';
import Character from './Character/Character';
import {
  createPlatforms,
  movePlatforms,
  PlatformInterface
} from './Platform/Platform';

function GameItem() {
  let intervalGameTimer: NodeJS.Timeout | undefined;
  useEffect(() => {
    return () => {
      clearInterval(intervalGameTimer);
    };
  }, []);

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
