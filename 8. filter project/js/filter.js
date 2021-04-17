let bakedItems = [{
    image: "images/sweets-1.jpeg",
    name: 'Sweet Item',
    price: '$5'
},
{
    image: 'images/cupcake-1.jpeg',
    name: 'Cupcake Item',
    price: '$5'
}, {
    image: 'images/cake-1.jpeg',
    name: 'Cake Item',
    price: '$5'
},
{
    image: 'images/doughnut-1.jpeg',
    name: 'Doughnut Item',
    price: '$5'
},
{
    image: 'images/sweets-2.jpeg',
    name: 'Sweet Item',
    price: '$10'
},
{
    image: 'images/cupcake-2.jpeg',
    name: 'Cupcake Item',
    price: '$10'
}, {
    image: 'images/cake-2.jpeg',
    name: 'Cake Item',
    price: '$10'
},
{
    image: 'images/doughnut-2.jpeg',
    name: 'Doughnut Item',
    price: '$10'
},
{
    image: 'images/sweets-3.jpeg',
    name: 'Sweet Item',
    price: '$15'
},
{
    image: 'images/cupcake-3.jpeg',
    name: 'Cupcake Item',
    price: '$15'
}, {
    image: 'images/cake-3.jpeg',
    name: 'Cake Item',
    price: '$15'
},
{
    image: 'images/doughnut-3.jpeg',
    name: 'Doughnut Item',
    price: '$15'
}];


(function () {
    var x;

    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-none');
        document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        // console.log(itm)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
    }
})();


// function for all button 

const allid = document.getElementById('all');

allid.addEventListener('click', () => {
    var x;
    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-none');
        document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        console.log(itm)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
    }
})

// function for cake button 

const cakeid = document.getElementById('cake');

cakeid.addEventListener('click', () => {
    var x;
    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-inline');
        document.getElementById('card'+x.toString()).classList.add('d-none');
        if(bakedItems[x].name.includes('Cake')){
            document.getElementById('card'+x.toString()).classList.remove('d-none');
            document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        console.log(bakedItems[x].name)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
        }
    }
})

// function for cupcake button 

const cupcakeid = document.getElementById('cupcake');

cupcakeid.addEventListener('click', () => {
    var x;
    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-inline');
        document.getElementById('card'+x.toString()).classList.add('d-none');
        if(bakedItems[x].name.includes('Cupcake')){
            document.getElementById('card'+x.toString()).classList.remove('d-none');
            document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        console.log(bakedItems[x].name)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
        }
    }
})

// function for sweets button

const sweetsid = document.getElementById('sweets');

sweetsid.addEventListener('click', () => {
    var x;
    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-inline');
        document.getElementById('card'+x.toString()).classList.add('d-none');
        if(bakedItems[x].name.includes('Sweet')){
            document.getElementById('card'+x.toString()).classList.remove('d-none');
            document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        console.log(bakedItems[x].name)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
        }
    }
})


// function for doghnuts button 

const doughnutid = document.getElementById('doughnuts');

doughnutid.addEventListener('click', () => {
    var x;
    for (x=0;x<bakedItems.length;x++) {
        document.getElementById('card'+x.toString()).classList.remove('d-inline');
        document.getElementById('card'+x.toString()).classList.add('d-none');
        if(bakedItems[x].name.includes('Doughnut')){
            document.getElementById('card'+x.toString()).classList.remove('d-none');
            document.getElementById('card'+x.toString()).classList.add('d-inline');
        var itm="items"+x.toString();
        console.log(bakedItems[x].name)
        document.getElementById(itm).src= bakedItems[x].image;
        
        document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
        // console.log('nameItem'+x.toString())
        document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
        // console.log('priceItem'+x.toString());
        }
    }
})

const usrInpt=document.getElementById('usrText');

function search(){
    // console.log(usrInpt.value)
    if(usrInpt.value !=null){
        var x;
        for( x=0; x<bakedItems.length;x++){
            document.getElementById('card'+x.toString()).classList.remove('d-inline');
            document.getElementById('card'+x.toString()).classList.add('d-none');
            if(bakedItems[x].name.toLowerCase().includes(usrInpt.value.toLowerCase())){
                document.getElementById('card'+x.toString()).classList.remove('d-none');
                document.getElementById('card'+x.toString()).classList.add('d-inline');
            var itm="items"+x.toString();
            console.log(bakedItems[x].name)
            document.getElementById(itm).src= bakedItems[x].image;
            
            document.getElementById('nameItem'+x.toString()).innerHTML = bakedItems[x].name;
            // console.log('nameItem'+x.toString())
            document.getElementById('priceItem'+x.toString()).innerHTML = bakedItems[x].price;
            }
        }

    }
}