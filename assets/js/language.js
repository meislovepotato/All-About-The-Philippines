const playSoundButtons = document.querySelectorAll('.play-sound');
const sounds = document.querySelectorAll('.sound');

playSoundButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    sounds[index].play();
  });
});
