import React from 'react';

interface CanvasInitParam {
  isDocumentLoaded: boolean;
  draw: Function;
  height: number;
  width: number;
}

const Canvas = ({ isDocumentLoaded, draw, height, width }: CanvasInitParam) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    // @ts-ignore
    const context = canvas.current.getContext('2d');

    if (isDocumentLoaded) draw(context);
  }, [isDocumentLoaded]);

  // @ts-ignore
  return <canvas ref={canvas} height={height} width={width}></canvas>;
};

export default Canvas;
