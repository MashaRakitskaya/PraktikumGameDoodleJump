const activateFullscreen = (element: any) => {
  if (element.requestFullscreen) {
    element.requestFullscreen(); // W3C spec
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen(); // Firefox
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen(); // Safari
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen(); // IE/Edge
  }
};
const deactivateFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else {
    // @ts-ignore
    if (document.mozCancelFullScreen) {
      // @ts-ignore
      document.mozCancelFullScreen();
    } else {
      // @ts-ignore
      if (document.webkitExitFullscreen) {
        // @ts-ignore
        document.webkitExitFullscreen();
      }
    }
  }
};

const initFullScreenAPI = () => {
  document.addEventListener('keydown', (event: { key: string }) => {
    if (event.key === 'Enter') {
      activateFullscreen(document.getElementById('Game'));
    }
  });
};

export { initFullScreenAPI };
