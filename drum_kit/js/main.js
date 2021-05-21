window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  const key_element = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  key_element.classList.add('active');

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    key_element.classList.remove('active');
  };
  
  const all_key_elements = document.querySelectorAll('.key');
  all_key_elements.forEach(key => key.addEventListener("transitionend", removeTransition));
}