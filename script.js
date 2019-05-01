burger.onclick = function myFunction() {
    const x = document.querySelector('#mynavigation');

    if(x.className === 'navigation'){
        x.className += ' responsive';
    } else {
        x.className = 'navigation';
    }
}
