window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if( !audio ) return;
    if( !key ) return;

    key.classList.remove('idleKey');
    key.classList.add('activeKey');

    audio.currentTime = 0;
    audio.play();
});

const keys = document.querySelectorAll('.key');

keys.forEach( key => key.addEventListener('transitionend', e =>{
    if( e.propertyName !== 'transform') return;

    e.srcElement.classList.remove('activeKey');
    e.srcElement.classList.add('idleKey');
}) );