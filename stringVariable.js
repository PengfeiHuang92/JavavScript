var filename = "stringVriables.js";
console.log("\nfilename: "+filename);

//Declare a String varuable

var myName = "Pengfei Huang";

//A double quoted string inside double quotes

var stringOne = "Leaning a second language is \"fun\"";  //putting backslash "\"" to escape character

var stringTwo = 'Leaning a second language is "fun"' ; //using a single quoted ourside of double quoted

console.log(stringOne + "\n" + stringTwo);


//length method return a integer number 

var strOneLength = stringOne.length;

console.log(strOneLength);


//Bracket Notation

var firstLetterOfStringOne = stringOne[0];

var lastLetterOfstringOne = stringOne[strOneLength - 1];

console.log("The first letter of StringOne is : " + firstLetterOfStringOne + "\n The last letter of stringOne is : " + lastLetterOfstringOne);

