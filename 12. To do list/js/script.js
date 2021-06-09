let err = document.getElementById('error');
// err.style.display ="block";
let container = document.querySelector('#container_list')
let input = document.querySelector('.input1');
// console.log(err.getPropertyValue('display'))
let add = document.querySelector('#add');
let clr = document.querySelector('#clr');
let cut;

// function to add elements into the page 
add.addEventListener('click', function () {
    let inputValue = input.value;
    // console.log(inputValue)
    if (inputValue == '') {
        err.style.display = 'block';
    } else {
        let htmlData = `<div class='single-element'><span class="list_itm" width="80%">${inputValue}</span>
        <i class="far fa-check-circle" onclick='check()' style="color: #80cfa9;font-size: 1.5vw;margin-right: 1vw;"></i>
        <i class="far fa-edit" onclick="editt()" style="color:rgb(0, 204, 255);font-size: 1.5vw;margin-right: 1vw;"></i>
        <i class="far fa-times-circle" onclick='del()' style="color: red; font-size: 1.5vw;"></i>
        </div>`;
        if (localStorage.getItem(inputValue) == null) {
            localStorage.setItem(inputValue, htmlData);
            container.insertAdjacentHTML('beforeend', htmlData);
            input.value = ''
        } else {
            alert('value already present !')
        }
        // location.reload();
    }
    setTimeout(function () { err.style.display = 'none'; }, 5000);
})


// function to remove all items from the page 

clr.addEventListener('click', () => {
    htmlData = ``;
    container.innerHTML = htmlData;
    localStorage.clear();
})


function myfunction() {
    for (var i = 0; i < localStorage.length; i++) {
        const inputValue = localStorage.key(i);
        const htmlData = localStorage.getItem(inputValue);
        // console.log(inputValue);
        // console.log(htmlData);
        container.insertAdjacentHTML("beforeend", htmlData);
        // location.reload();
        input.value = '';
    }
    // location.reload();
}

// function to remove single items on clicking cut
// let delBtn = document.getElementById('delBtn');

let del = () => {
    // console.log('ok');
    let curentElement = event.target.parentElement.firstElementChild.innerHTML;
    console.log(curentElement)
    localStorage.removeItem(curentElement);

    let list = document.querySelector('.single-element');
    // event.target.parentElement.remove();

    list.remove();
}

// if(delBtn){delBtn.addEventListener('click', deletee);}

// edit function starts 

function editt() {
    let editElement = event.target.parentElement.firstElementChild.innerHTML;
    console.log(editElement)
    //   let list= document.querySelector('.single-element');  
    // event.target.parentElement.remove();
    localStorage.removeItem(editElement);
    event.target.parentElement.remove();
    input.value = editElement;
}

// function to check the item if done 

function check() {
    let currentElement = event.target;
    console.log(currentElement.style.color)
    if (currentElement.style.color == 'rgb(128, 207, 169)') {
        currentElement.style.color = '#a2ffd2';
        currentElement.parentElement.firstElementChild.style.color = 'grey';
        currentElement.parentElement.firstElementChild.style.textDecoration = 'line-through';
    }else{
        currentElement.style.color = 'rgb(128, 207, 169)';
        currentElement.parentElement.firstElementChild.style.color = 'black';
        currentElement.parentElement.firstElementChild.style.textDecoration = 'none';
    }
}