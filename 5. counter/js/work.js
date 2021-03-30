// var count=0;
//this function subtracts 1 from the count
function lowCount(){
    var count=parseInt(document.getElementById('num').textContent);
    count-=1;
    if(count==0){
        document.getElementById('num').style.color='black';
    }
    if(count<0){
    document.getElementById('num').style.color="red";
}
    document.getElementById('num').innerHTML=count;
}

//this function adds 1 to the count

function addCount(){
    var count=parseInt(document.getElementById('num').textContent);
    count+=1;
    
    if(count==0)
    {document.getElementById('num').style.color="black";}
    if(count>=1){
    document.getElementById('num').style.color="green";}
    // alert(count);
    document.getElementById('num').innerHTML=count;
}