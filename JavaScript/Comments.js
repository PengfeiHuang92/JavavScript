"use strict";
var filename = "Comments.js";
console.log("\nfilename: " + filename);

/**
 * add an event listener to the comment text area box that 
 * runs the updateCount() function in response to the keyup event.
 */
document.getElementById("comment").addEventListener("keyup",updateCount);    


function updateCount(){
    //Declare the commentText variabel that references the value stored in the commentArea  
    var commentText = document.getElementById("commentArea").value;
    //Countting the number of the texts from commentText
    var numOftext = countCharacters(commentText);
    //Declare the commentCount variable that reference the wordCount
    var commentCount = document.getElementById("wordCount");
    //Formating the commentCount 
    commentCount.value = numOftext + "/1000";

    //Checking if the numOftext is greater than 1000, change the background and text color.
    if(numOftext > 1000){
        commentCount.style.backgroundColor="red";
        commentCount.style.color="white";
    }else{
        commentCount.style.backgroundColor="white";
        commentCount.style.color="black";
    }
}
//Countting the number of characters form textStr
function countCharacters(textStr) {
    var commentregx = /\s/g;
    var chars = textStr.replace(commentregx, "");
    return chars.length;
 } 