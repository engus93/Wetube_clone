const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayBtn");
const volumBtn = document.getElementById("jsVolumBtn");
const expandBtn = document.getElementById("jsExpandBtn");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlayer.muted = true;
    volumBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function handleExpandClick() {}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
  volumBtn.addEventListener("click", handleVolumClick);
  expandBtn.addEventListener("click", handleExpandClick);
}

if (videoContainer) {
  init();
}
