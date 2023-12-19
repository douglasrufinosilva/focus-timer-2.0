let audioPlayer = new Audio();
let currentPlayingButton = null;

function playMusic(source) {
    // Verifique se há uma música em reprodução
    if (currentPlayingButton !== null) {
        stopMusic();
    }

    // Inicie a nova música
    audioPlayer.src = source;
    audioPlayer.play();

    // Atualize o botão atualmente tocando
    currentPlayingButton = this;
}

function stopMusic() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;

    // Limpe a referência do botão tocando
    currentPlayingButton = null;
}
