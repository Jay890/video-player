const video = document.getElementById('video');
const play = document.getElementById('play');
const stopVid = document.getElementById('stop');
// const pause = document.getElementById('pause');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play and pause video
function toggleVideoStatus() {
  //   use an api properties - e.g.paused checks if it is
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update the play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress and timestamp
function updateProgress() {}

// Stop the video
function stopVideo() {
  // no stop api featture, there a currentTime we set it to 0 and pause video instead
  video.currentTime = 0;
  video.pause();
}

// Set video time to match progress
function setVideoProgress() {}

// Event Listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

stopVid.addEventListener('click', stopVideo);
play.addEventListener('click', toggleVideoStatus);
progress.addEventListener('change', setVideoProgress);
