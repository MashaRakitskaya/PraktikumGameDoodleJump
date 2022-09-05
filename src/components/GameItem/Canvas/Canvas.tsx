import React from 'react';

const Canvas = ({ draw, height, width }: any) => {
  const canvas = React.createRef();
  React.useEffect(() => {
    // @ts-ignore
    const context = canvas.current.getContext('2d');
    draw(context);
  }, [draw]);

  // @ts-ignore
  return <canvas ref={canvas} height={height} width={width} />;
};

export { Canvas };
