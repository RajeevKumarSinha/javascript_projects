let imgArray=['image/blacklembo.jpg','image/citroen.jpg','image/greenlembo.jpg','image/silveraudi.jpg','image/yellowferrari.jpg'];
// var i;

(function () {
    document.slide.src=imgArray[0];
})();
var index = 0;

// function slideLeft(){
    // {console.log(imgArray[i]);
        
        // var sour=document.getElementById('imgSrc').getAttribute('src');
        // console.log(sour);
        // for(i=imgArray.length-1;i>=0;i--){
        //   if(sour==imgArray[i] && i!=0){
        //       document.slide.src=imgArray[i-1] 
        //     }else if(i==0){
        //         i=imgArray.length-1;
        //     }
            
        // }
        
        function slideLeft(direction)
        {
          if (direction == "left")
          {
            index--;
          }
          else
          {
            index++;
            index %= imgArray.length;
          }
          
          if (index < 0)
          {
            index = imgArray.length - 1;
          }
          
          document.slide.src= imgArray[index];
        }
        
    // }