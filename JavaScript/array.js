var filename = "array.js";
console.log("\nfilename: " + filename);

//Declare an array

var arrayOne = [["Month", 2]]; //Does not neet to be the same data type

//Nest Array which

var arrayTwo = [["Month", 4], ["Day" , 1 , "Year", 2020]] ;

//Access array data

dataFromArrayTwo = arrayTwo[0];

console.log(dataFromArrayTwo);

//Update array data

arrayTwo[0][1] = 5; //changing ["Month",4] to ["Month", 5]

console.log(dataFromArrayTwo);

//Append a data to array by using push function

arrayOne.push(["Author","Pengfei"]);

console.log(arrayOne);

//Remove a data from array by using pop function

arrayOne.pop();

console.log(arrayOne);

