import React from 'react';

interface CanvasInitParam {
  isDocumentLoaded: boolean;
  draw: Function;
  height: number;
  width: number;
  play: boolean;
}

const Canvas = ({
  isDocumentLoaded,
  draw,
  height,
  width,
  play
}: CanvasInitParam) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    // @ts-ignore
    const context = canvas.current.getContext('2d');

    if (isDocumentLoaded) draw(context);
  }, [isDocumentLoaded, play]);

  // @ts-ignore
  return <canvas id="Game" ref={canvas} height={height} width={width}></canvas>;
};

export default Canvas;
