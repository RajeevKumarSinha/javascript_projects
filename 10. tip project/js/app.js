// (function(){
//     console.log('fuck ths');  
// })();

const btn = document.getElementById('btnId');
btn.addEventListener('click', Reload);

function Reload() {
    let errBox = document.querySelector('.err_box');
    let amount_err = document.getElementById('amount_err');
    let users_err = document.getElementById('users_err');
    let service_err = document.getElementById('service_err');
    let billAmount = document.getElementById('amount').value;
    let noOfPeople = document.getElementById('people').value;
    let tipPercent = document.getElementById('tipPercent').value;
    errBox.style.display = 'none';

    if (billAmount == '') {
        errBox.style.display = 'block';
        amount_err.innerHTML = 'Bill Amount Cannot Be Blank';
    }
    if (noOfPeople == '') {
        errBox.style.display = 'block';
        users_err.innerHTML = 'Number Of Users Must Be Greater Than Zero';
    }
    if (tipPercent == 0) {
        errBox.style.display = 'block';
        service_err.innerHTML = 'You Must Select A Service';
    }

    let output = document.querySelector('.output');
    output.style.display = 'inline';
    if (billAmount != '' && noOfPeople != '' && tipPercent != 0) {
        output.style.display = 'block';
        billAmount = parseFloat(billAmount);
        noOfPeople = parseFloat(noOfPeople);
        tipPercent = parseFloat(tipPercent);
        let tipAmount = tp((billAmount), (tipPercent));
        let totalAmount = ta(billAmount, tipAmount);
        let amountEach = ec(totalAmount, noOfPeople);
        document.getElementById('tipAmt').innerHTML = `Tip Amount $ ${tipAmount}`;
        document.getElementById('totalAmt').innerHTML =`Total Amount $ ${totalAmount}`;
        document.getElementById('each').innerHTML =`Each Person Owes $ ${amountEach}`;
    }
    setTimeout(function () { location.reload() }, 10000);
}

// function for tip amount calculation 
function tp(x, y) {
    return x * y;
}

// function for total amount calculation 
function ta(x, y) {
    return x + y;
}

// function for amount for each person calculation
function ec(x, y) {
    return x / y;
}