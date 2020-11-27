"use strict"; // Defines that JavaScript code should be executed in "strict mode"
//in strict mode, all variable must be declared before use it
var filename = "RatingStars.js";
console.log("\nfilename: " + filename);

window.onload =init;

function init(){
    //Declare the stars variable that stores an object collection of the reviewing stars,
    //referenced by the span#stars img selector
    var stars = document.querySelectorAll("div#ratingStars img");
    
    /**Loop through the star collection and for each star image in the collection change 
     * the cursor style to pointer and add an event listener to run the lightStars() function 
     * in response to the mouseenter event occurring over each star image. */
    for(var i = 0; i<stars.length;i++){
        
        stars[i].style.cursor = "pointer";  //changing the cursor style to pointer
        stars[i].addEventListener("mouseenter",lightStars);
        
    }
}

function lightStars(event){
    /** 
     *  Stored the rating value of each star image in the img element’s alt attribute. 
     * Store the value of the alt attribute of the target of the event object in the starNumber variable
    */
   
   var starNumber = event.target.alt;

   var stars =  document.querySelectorAll("div#ratingStars img");

   /**Loop through the stars collection with an index ranging from 0 up to less than the value of the 
    * starNumber variable. Light every star in the collection by changing the src attribute of the star 
    * image to the rating_gold_star.png image file */
   for(var i = 0; i < starNumber; i++){
       stars[i].src = "./img/rating_gold_star.png";  
   }
   /**
    * loops through the stars collection with the index ranging from the value of the starNumber variable
    *  to less than 5. Unlight every star in this collection by changing the src attribute of the star image 
    * to the rating_white_star.png image file
    */
   for(var i = starNumber; i < stars.length ; i++ ){
       stars[i].src = "./img/rating_white_star.png";  
   }
   document.getElementById("ratting").value = starNumber + " stars";

   //If the user clicks the star image, the selected rating should be set, which means moving the mouse pointer off the star should not remove the rating. Add an event listener for the target of the event object that runs an anonymous function removing the turnOffStars() function from the mouseleave event
   event.target.addEventListener("click",function(event){
   event.target.removeEventListener("mouseleave",turnOffStars);
  });
}