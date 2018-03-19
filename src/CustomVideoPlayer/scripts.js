/* NOTE: First Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const playButton = player.querySelector('.player__button');

/* NOTE: Second Build out Functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  //<reference https://stackoverflow.com/questions/4468876/how-can-i-invoke-a-member-function-using-bracket-notation
  video[method](); // video.play() : video.pause()
  // console.log(video[method]);
  /* NOTE: If else expression
    if(video.paused) {
      video.play();
    } else {
      video.pause();
    }
  */
}

function updateButton() {
  // this bound to the video itself
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
  console.log(icon);
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.value);
  console.log(this.name);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis =  `${percent}%`; // handle .progress__filled flex-basis
}

function scrub(e) {
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime; // update video time
}

/* NOTE: Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub); // handle progress bar click update
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // handle progress bar click drag update
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
