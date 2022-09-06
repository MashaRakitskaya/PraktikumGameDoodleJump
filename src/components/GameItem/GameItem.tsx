import React from 'react';
import { GameWrapper } from './GameItem.styles';
import Canvas from './Canvas/Canvas';
import Character from './Character/Character';
import { createPlatforms, movePlatforms } from './Platform/Platform';

function GameItem() {
  // @ts-ignore
  function draw(context) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    let isGameOver = false;
    let platformCount = 20;
    let platforms: any = [];

    if (!isGameOver) {
      platforms = createPlatforms(context, platformCount, platforms);

      const person = new Character(
        context,
        platforms[0].bottom - 60,
        platforms[0].left + 40
      );
      person.draw();
      // @ts-ignore
      setInterval(() => {
        movePlatforms(context, platforms, person);
      }, 30);
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
        width={document.documentElement.clientWidth - 223}
      />
    </GameWrapper>
  );
}

export default GameItem;
