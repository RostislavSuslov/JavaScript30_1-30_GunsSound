 window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
     if (!audio) return;
     audio.currenTime = 0;
     audio.play();
     console.log(key)
     key.classList.add('playing');
 });