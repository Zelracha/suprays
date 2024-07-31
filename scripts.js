document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause');

    // Play/Pause button functionality
    playPauseButton.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="material-icons">pause_circle_filled</i>';
        } else {
            audioPlayer.pause();
            playPauseButton.innerHTML = '<i class="material-icons">play_circle_filled</i>';
        }
    });
});
