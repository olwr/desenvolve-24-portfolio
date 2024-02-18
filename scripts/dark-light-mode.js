// Declarations
const body = document.querySelector('body'),
    color_switch = document.querySelector('.color-switch'),
    language_switch = document.querySelector('.language-switch');


// Local storage 
let getMode = localStorage.getItem('mode');
if(getMode && getMode === 'dark') {
    body.classList.add('dark');

    color_switch.classList.add('active');
}

// Switching colors

color_switch.addEventListener('click', () => {
    body.classList.toggle('dark');

    if(!body.classList.contains('dark')) {
        return localStorage.setItem('mode', 'light');
    }
        localStorage.setItem('mode', 'dark');
});


color_switch.addEventListener('click', () => color_switch.classList.toggle('active'));
language_switch.addEventListener('click', () => language_switch.classList.toggle('active'));