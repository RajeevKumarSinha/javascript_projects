// var count=0;
//this function subtracts 1 from the count
function lowCount(){
    var count=parseInt(document.getElementById('num').textContent);
    document.getElementById('num').innerHTML=count-1;
}

//this function adds 1 to the count

function addCount(){
    var count=parseInt(document.getElementById('num').textContent);
    // alert(count);
    document.getElementById('num').innerHTML=count+1;
}