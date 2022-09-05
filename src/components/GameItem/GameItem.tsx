import React from 'react';
import { GameWrapper } from './GameItem.styles';
import { Canvas } from './Canvas/Canvas';
import drawCharacter from './Character/Character';

function GameItem() {
  // @ts-ignore
  function draw(context) {
    drawCharacter(context);
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
