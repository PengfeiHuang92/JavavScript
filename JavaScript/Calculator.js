"use strict";

console.log("\nfilename: Calculator.js");


window.onload = init;

function init(){
    var calButton = document.querySelectorAll(".CalButton");
   
    for(var i=0; i<calButton.length; i++){
        
        //calButton[i].addEventListener("click",buttonClick);
         calButton[i].onclick = buttonClick;
    }    
}
function buttonClick(e){
    
    var resultWindow = document.getElementById("resultWindow").value;
    var buttonValue = e.target.value;
    switch(buttonValue){
        case "del": resultWindow=""; //set the resultWindow to empty
                    break;
        case "bksp": resultWindow = bkspFunction(resultWindow); break;
        case "prev": resultWindow += prevFunction(resultWindow); break;
        case "enter": resultWindow += "=" +enterFunction(resultWindow) + "\n"; break;
        default:
            resultWindow += buttonValue;
    }
    document.getElementById("resultWindow").value = resultWindow;
    
}

function bkspFunction(textStr){
    return textStr.substr(0,textStr.length-1);
}
function prevFunction(testStr){
    var lines = testStr.split(/\r?\n/);
    var lastSecondLine = lines[lines.length -2];
    return lastSecondLine.substr(0,lastSecondLine.indexOf("=")).trim();
}
function enterFunction(testStr){
    var lines = testStr.split(/\r?\n/);
    var lastLine = lines[lines.length -1];
    return eval(lastLine);
}