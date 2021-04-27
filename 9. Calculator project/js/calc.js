let textVal=document.getElementById('text');
// console.log(textVal);

function concat(x){

    if(x==0){
        textVal.value +='0';
    }else if(x=='.'){
        alert("can't take decimal values but will be added 🙂  soon so stay tuned!"); 
    }else if(x=='+'){
        textVal.value +='+';
    }else if(x=='-'){
        textVal.value +='-';
    }else if(x=='/'){
        textVal.value +='/';
    }else if(x=='*'){
        textVal.value +='*';
    }else if(x=='1'){
        textVal.value +='1';
    }else if(x=='2'){
        textVal.value +='2';
    }else if(x=='3'){
        textVal.value +='3';
    }else if(x=='4'){
        textVal.value +='4';
    }else if(x=='5'){
        textVal.value +='5';
    }else if(x=='6'){
        textVal.value +='6';
    }else if(x=='7'){
        textVal.value +='7';
    }else if(x=='8'){
        textVal.value +='8';
    }else if(x=='9'){
        textVal.value +='9';
    }else if(x=='c'){
        textVal.value ='';
    }
}

function calculate(){
    // let textVal=document.getElementById('text');
    let numbers = textVal.value.match(/\d+/g);
    // console.log(numbers);
    let operators=[];
    var j=0;
    for (var i=0;i<textVal.value.length;i++){
        if(textVal.value[i]=='/'){
            operators[j]=textVal.value[i];
            j++;
        }else if(textVal.value[i]=='*'){
            operators[j]=textVal.value[i];
            j++;
        }else if(textVal.value[i]=='+'){
            operators[j]=textVal.value[i];
            j++;
        }else if(textVal.value[i]=='-'){
            operators[j]=textVal.value[i];
            j++;
        }
    }
    // console.log(numbers)
    // numbers=parseInt(numbers);
    // console.log(numbers)
    // console.log(operators);
    // console.log(numbers)
    // console.log(operators.indexOf('-'));

    // console.log(parseInt(textVal.value))



    for (var i=0; i<numbers.length;i++){
        if(operators.includes('/')){
            var index =operators.indexOf('/');
            numbers[index]=parseInt(numbers[index])/parseInt(numbers[index+1]);
            operators.splice(index,1);
            numbers.splice(index+1,1);
            
        }else if(operators.includes('-')){
            var index =operators.indexOf('-');
            numbers[index]=parseInt(numbers[index])-parseInt(numbers[index+1]);
            operators.splice(index,1);
            numbers.splice(index+1,1);
          
        }else if(operators.includes('+')){
            var index =operators.indexOf('+');
            numbers[index]=parseInt(numbers[index])+parseInt(numbers[index+1]);
            operators.splice(index,1);
            numbers.splice(index+1,1);
          
        }else if(operators.includes('*')){
            var index =operators.indexOf('*');
            numbers[index]=parseInt(numbers[index])*parseInt(numbers[index+1]);
            operators.splice(index,1);
            numbers.splice(index+1,1);           
           
        }
    }
    // console.log(numbers[0]);
    var out=numbers[0].toString();
    textVal.value =out;

}

function sum(x,y){
    return x+y;
}
function div(x,y){
    return x/y;
}
function mul(x,y){
    return x*y;
}
function sub(x,y){
    return x-y;
}