function toggleFullscreen() {
  let elem = document.getElementById('Game');

  if (!document.fullscreenElement) {
    // @ts-ignore
    elem.requestFullscreen().catch((err) => {
      console.log(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
      );
    });
  } else {
    document.exitFullscreen();
  }
}

const initFullScreenAPI = () => {
  document.addEventListener('keydown', (event: { key: string }) => {
    if (event.key === 'Enter') {
      toggleFullscreen();
    }
  });
};

export { initFullScreenAPI };
