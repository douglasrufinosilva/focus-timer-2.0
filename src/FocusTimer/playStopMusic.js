let audioPlayer = new Audio();
let currentPlayingButton = null;

function toggleMusic(source, button) {
    // Verifica se o botão clicado é o mesmo que está atualmente tocando a música
    if (button === currentPlayingButton) {
        // Se sim, pausa a música
        if (!audioPlayer.paused) {
            audioPlayer.pause();
        } else {
            // Se estiver pausada, retoma
            audioPlayer.play();
        }
    } else {
        // Se o botão for diferente, para a música anterior e inicia a nova
        if (currentPlayingButton !== null) {
            stopMusic();
        }

        audioPlayer.src = source;
        audioPlayer.play();

        // Atualiza o botão atualmente tocando
        currentPlayingButton = button;
    }
}

function stopMusic() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;

    // Limpa a referência do botão tocando
    currentPlayingButton = null;
}