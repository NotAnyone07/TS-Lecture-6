"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//main function
function Names(param1, param2) {
    console.log("wow overloads!");
}
Names("Anyone", "As-Sayyiq");
Names(1, 2);
Names(2, 3);
Names(true, false);
var array = [1, 2, 3, "hi", true];
var array2 = [1, 2, 3,];
var tuples2 = [17, "heh", true];
var tuples = ["anyone", "hi"];
var accessingTuples = tuples[1];
console.log(accessingTuples); //prints value on index number 1 which is anyone
tuples.push("hi");
console.log(tuples);
var TupleFunction = function () {
    return [17, "Anyone"];
}; //returns an array
//de-structuring an array
var _a = TupleFunction(), age = _a[0], name1 = _a[1];
console.log(age); //prints 17
//forloop
//variable inialisation        : condition ; increment or decrement
// assigning value to variable               increase  or decrease
//lets make a loop that can add 1 to each number from 0
//assigning value to variable     stopping/condition : increase or decrease
for (var num = 0; num <= 10; num++) {
    console.log(num);
}
//now lets make a loop that is the 2 table until 10
var n1 = 2;
for (var num2 = 1; num2 <= 10; num2++) {
    console.log(n1 * num2);
} //prints the answer only
var n3 = 2;
for (var num3 = 1; num3 <= 10; num3++) {
    console.log("".concat(n3, "* ").concat(num3));
} //2*2 
var n4 = 2;
for (var num4 = 1; num4 <= 10; num4++) {
    console.log("".concat(n4, " * ").concat(num4, " = ").concat(n4 * num4));
} //prints 2*2 = 4
//I want to run the code until 5 
var n5 = 2;
for (var num5 = 1; num5 <= 10; num5++) {
    console.log("".concat(n5, " * ").concat(num5, " = ").concat(n4 * num5));
    if (n5 * num5 == 10) {
        break; //to literally break something
    }
} //prints until 2*5 = 10 and doesnt go further because we told it to break when value is = 10
//printing the table of 2 beautifully🌟
for (var num7 = 1; num7 <= 10; num7++) {
    var n6 = 2;
    var ans = n6 * num7;
    console.log(n6 + " x " + num7 + " = " + ans);
}
for (var num8 = 11; num8 <= 10; num8++) {
    console.log(num8);
} //doesnt print anything
// let num9 : number = 1
// while(num9 <=10){
//    console.log(num9)
//    num9++
//prints number 1 to 10
// let num9 : number = 11
// while(num9 <=10){
//    console.log(num9)
//    num9++
//prints nothing as number is bigger than defined
var n9 = 11;
do {
    console.log(n9);
    n9++;
} while (n9 <= 10); //prints 11 why?
// let AlphabetsOF : string ="Anyone"
// let Name : string= "Anyone"
// for(AlphabetsOF of Name){
//     console.log(AlphabetsOF);
// };
var Name = "Anyone";
var NameLength = Name.length;
for (var _i = 0, Name_1 = Name; _i < Name_1.length; _i++) {
    var AlphabetsOF = Name_1[_i];
    console.log("Name=", AlphabetsOF + NameLength);
}
