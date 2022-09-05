import React from 'react';
// @ts-ignore
function drawCharacter(context) {
  const widthCharacter = 40;
  const heightCharacter = 60;
  const posCharacterX = (context.canvas.width + widthCharacter) / 2;
  const posCharacterY = context.canvas.height - (heightCharacter + 40);

  context.fillStyle = 'rgb(0, 0, 0)';
  context.fillRect(
    posCharacterX,
    posCharacterY,
    widthCharacter,
    heightCharacter
  );

  console.log('canvasW ', context.canvas.width);
  console.log('canvasH ', context.canvas.height);
}

export default drawCharacter;
