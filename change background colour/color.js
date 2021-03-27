//let val = 0;(Math.random()*(0-7))+0;

function changeColor() {
    // if (val == 0) {
    //     val = 1;
    let colors= Math.floor((Math.random()*1000000)+1);
        return document.getElementById('body').style.backgroundColor = "#"+colors.toString(); 
          // }
    // else if (val == 1) {
    //     val = 2;
    //     return document.getElementById('body').style.backgroundColor = 'red';
    // }
    // else if (val == 2) {
    //     val = 0;
    //     return document.getElementById('body').style.backgroundColor = 'orange';
    // }
}