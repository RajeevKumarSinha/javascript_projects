let marvelCharacters=[{
    name:'CAPTAIN AMERICA',
    image:'image/captain-america.jpg',
    about:'He is a good man with a shield made up of vibranum , he is very strong and is the part of avengers.'
},
{
    name:'IRON MAN',
    image:'image/iron.jpg',
    about:'He is a billionare genius in technology as he made this iron man suit for himself , he is a playboy and an avenger'
},
{
    name: 'CAPTAIN MARVEL',
    image : 'image/marvel.jpg',
    about : 'She is a super women with a lot of cool abilities , she came into the avengers in end game at the last moments'
},
{
    name : "BLACK PANTHER",
    image : "image/panther.gif",
    about : 'He is the king of wakanda and have mines of vibranium , his suit is made up of vibranium too.'
},{
    name : 'SPIDER MAN',
    image : 'image/spider.jpg',
    about : 'He is a teen boy bitten by a spider which have given him a lot of abilties , he uses webs as wepons and is strong'
},
{
    name : "WANDA",
    image : 'image/wanda.jpeg',
    about : 'She is a witch who gained her powers from the mind stone which gives her very powerful abilities.'
}];

(function(){
document.dp.src=marvelCharacters[0].image;
document.getElementById('pname').innerHTML=marvelCharacters[0].name;
document.getElementById('aboutEm').innerHTML=marvelCharacters[0].about;
})();

// actual function
var index=0;
function slide(direction){
    if(direction=='left'){
        index--;
    }
    else{index++;}
    if(index<0){index=marvelCharacters.length-1;}
    if(index>marvelCharacters.length-1){index=0;}
    console.log(index);
    document.dp.src=marvelCharacters[index].image;
document.getElementById('pname').innerHTML=marvelCharacters[index].name;
document.getElementById('aboutEm').innerHTML=marvelCharacters[index].about;
    
}