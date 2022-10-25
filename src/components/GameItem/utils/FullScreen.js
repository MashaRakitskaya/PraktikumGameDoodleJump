function toggleFullScreen(elem) {
  if (
    document.fullScreenElement ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)
  ) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

const initFullScreenAPI = () => {
  let elem;
  document.addEventListener('keydown', (event) => {
    elem = document.getElementById('canvas');
    if (event.key === 'Enter') {
      toggleFullScreen(elem);
    }
  });
};

export { initFullScreenAPI };
