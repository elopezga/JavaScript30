function activateKey(e){
    console.log(e);

    let audio = null;
    let key = null;

    if( e.type === 'click' ){
        audio = document.querySelector(`audio[data-key="${e.srcElement.attributes[0].value}"]`);
        key = document.querySelector(`.key[data-key="${e.srcElement.attributes[0].value}"]`);
    }else{
        audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    } 

    if( !audio ) return;
    if( !key ) return;

    key.classList.remove('idleKey');
    key.classList.add('activeKey');

    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', activateKey);

const keys = document.querySelectorAll('.key');

function setAsIdleKey(e){
    if( e.propertyName !== 'transform') return;

    e.srcElement.classList.remove('activeKey');
    e.srcElement.classList.add('idleKey');
}

keys.forEach( key => key.addEventListener('click', activateKey));
keys.forEach( key => key.addEventListener('transitionend', setAsIdleKey ) );