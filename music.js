document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('audio');
  const playPauseButton = document.getElementById('playPause');
  const stopButton = document.getElementById('stop');
  const seekBar = document.getElementById('seekBar');

  playPauseButton.addEventListener('click', function () {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = 'Pause';
    } else {
      audio.pause();
      playPauseButton.textContent = 'Play';
    }
  });

  stopButton.addEventListener('click', function () {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.textContent = 'Play';
  });

  audio.addEventListener('timeupdate', function () {
    const value = (audio.currentTime / audio.duration) * 100;
    seekBar.value = value;
  });

  seekBar.addEventListener('input', function () {
    const value = seekBar.value;
    audio.currentTime = (value / 100) * audio.duration;
  });
});

  
