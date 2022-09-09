import React from 'react';
import { GameWrapper } from './GameItem.styles';
import Canvas from './Canvas/Canvas';
import Character from './Character/Character';
import { createPlatforms, movePlatforms } from './Platform/Platform';

function GameItem() {
  function draw(context: CanvasRenderingContext2D) {
    let isGameOver = false;
    let platformCount = 20; // Общее оличество платформ на сцену
    let platforms: any = [];
    let stepPlatformsDown: number = 5; // Шаг передвижения платформ вниз (Имитация цикличности)
    let speedGame = 5; // общая скорость игры

    if (!isGameOver) {
      platforms = createPlatforms(context, platformCount, platforms);

      const person = new Character(
        context,
        platforms[1].bottom - 60,
        speedGame,
        platforms[1].left + 40
      );

      setInterval(() => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        platforms.forEach((platform: { draw: () => void }) => {
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
  }
  return (
    <GameWrapper>
      <Canvas
        draw={draw}
        height={document.documentElement.clientHeight}
        width={document.documentElement.clientWidth - 500}
      />
    </GameWrapper>
  );
}

export default GameItem;
