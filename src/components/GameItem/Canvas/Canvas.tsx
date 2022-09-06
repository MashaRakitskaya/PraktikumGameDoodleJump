import React from 'react';

// @ts-ignore
const Canvas = ({ draw, height, width }) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    // @ts-ignore
    const context = canvas.current.getContext('2d');
    draw(context);
  }, []);

  // @ts-ignore
  return <canvas ref={canvas} height={height} width={width}></canvas>;
};

export default Canvas;
