let err = document.getElementById('error');
// err.style.display ="block";
let container = document.querySelector('#container_list')
let input = document.querySelector('.input1');
// console.log(err.getPropertyValue('display'))
let add = document.querySelector('#add');
let clr = document.querySelector('#clr');
let cut;

// function to add elements into the page 
add.addEventListener('click',function(){
    let inputValue = input.value;
    // console.log(inputValue)
    if(inputValue ==''){
        err.style.display = 'block';
    }else{
        
        let htmlData = `<div class='single-element'><span class="list_itm" width="80%">${inputValue}</span>
        <i class="far fa-check-circle" style="color: #80cfa9;font-size: larger;margin-right: 10px;"></i>
        <i class="far fa-edit" style="color:rgb(0, 204, 255);font-size: larger;margin-right: 10px;"></i>
        <i class="far fa-times-circle" onclick="deletee()" style="color: red; font-size: larger;"></i>
        </div>`;
        localStorage.setItem(inputValue, htmlData);
        location.reload;
        myfunction();
    }
    setTimeout(function () { err.style.display = 'none'; }, 5000); 
})


// function to remove all items from the page 

clr.addEventListener('click', ()=>{
    htmlData=  ``;
    container.innerHTML=htmlData;
    localStorage.clear();
})

// function to remove single items on clicking cut
let deletee = () =>{
    console.log('ok');
   let list= document.querySelector('.single-element');   
   list.remove();
};

function myfunction(){
    for(var i=0;i<localStorage.length;i++){
        const inputValue =localStorage.key(i);
        const htmlData =localStorage.getItem(inputValue);
        console.log(inputValue);
        console.log(htmlData);
    container.insertAdjacentHTML("beforeend",htmlData);
    input.value='';
    }
}

