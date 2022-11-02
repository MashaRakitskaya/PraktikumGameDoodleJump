function fullScreenInit(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.webkitrequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.mozRequestFullscreen) {
    element.mozRequestFullScreen();
  }
}

function fullScreenCancel() {
  console.log('CANCEL')
  if (document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
}


export { fullScreenInit, fullScreenCancel };
