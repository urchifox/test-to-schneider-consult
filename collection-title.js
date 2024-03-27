const button = document.querySelector('.collection-title__lead-button');
const content = document.querySelector('.collection-title__lead-text');

const buttonText = {
    hide: 'скрыть',
    show: 'раскрыть'
}

const onButtonClick = () => {
    content.classList.toggle('hide-text');
    button.textContent = (button.textContent === buttonText.hide ? buttonText.show : buttonText.hide);
}

const init = () => {
    button.textContent = buttonText.show;
    button.style.setProperty('--initial-width', `${button.clientWidth}px`);
    button.addEventListener('click', onButtonClick);
}

export {init};
