let imgChange = document.getElementById('imgChange')
let btnOff = document.querySelector('#btn1');
btnOff.addEventListener('click', changeImg);
let btnOn = document.querySelector('#btn2');
btnOn.addEventListener('click', changeImg2);

function changeImg() {
    if (imgChange.src.match('image/bulbOn.png')) {
        imgChange.src = 'image/bulbOff.png';
    }
}

function changeImg2() {
    if (imgChange.src.match('image/bulbOff.png')) {
        imgChange.src = 'image/bulbOn.png';
    }
}