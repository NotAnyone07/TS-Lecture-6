import { count, log } from "console"

//function overloads
function Names(param1 : string , param2: string): string; //option 1
function Names(param1 : number , param2 : number): number; //option 2
function Names(param1: boolean , param2 : boolean): boolean; //option 3


//main function
function Names(param1 : any , param2 : any) : any{
    console.log("wow overloads!")
}
Names("Anyone","As-Sayyiq")
Names(1,2,)
Names(2,3)
Names(true, false)

let array = [1,2,3,"hi",true]
let array2: number[] = [1,2,3,]
let tuples2 =[17,"heh",true]

let tuples : [ string, string] = ["anyone","hi"]
let accessingTuples = tuples[1]
console.log(accessingTuples)//prints value on index number 1 which is anyone
tuples.push("hi")
console.log(tuples)

let TupleFunction =() : [number, string]=>{
    return[17,"Anyone"]
} //returns an array

//de-structuring an array
let [age , name1]=TupleFunction()
console.log(age)//prints 17

//forloop
//variable inialisation        : condition ; increment or decrement
// assigning value to variable               increase  or decrease
//lets make a loop that can add 1 to each number from 0
//assigning value to variable     stopping/condition : increase or decrease
for(let num:number = 0; num<=10 ; num++){
    console.log(num);
}
//now lets make a loop that is the 2 table until 10
let n1 :number = 2
for(let num2 : number = 1; num2<=10 ; num2++){
    console.log(n1*num2)
}//prints the answer only
let n3 : number = 2
for(let num3 : number = 1 ; num3 <=10 ; num3++){
    console.log(`${n3}* ${num3}`)
} //2*2 

let n4 : number = 2 
for(let num4 : number = 1 ; num4 <=10 ; num4++){
    console.log(`${n4} * ${num4} = ${n4*num4}` )
}//prints 2*2 = 4

//I want to run the code until 5 
let n5 : number = 2
for(let num5 : number = 1 ; num5 <=10 ; num5++){
    console.log(`${n5} * ${num5} = ${n4*num5}` )
    if(n5*num5==10){
        break //to literally break something
    }
}//prints until 2*5 = 10 and doesnt go further because we told it to break when value is = 10

//printing the table of 2 beautifully🌟
for(let num7 : number = 1 ; num7 <=10 ; num7++){
    let n6 : number = 2
    let ans = n6*num7
    console.log(n6 +" x " + num7 + " = " + ans )
}

for(let num8 : number = 11 ; num8 <=10 ; num8++){
    console.log(num8)
}//doesnt print anything

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

let n9 : number =11
do{
    console.log(n9)
    n9 ++
}while(n9 <= 10)//prints 11 why?

// let AlphabetsOF : string ="Anyone"
// let Name : string= "Anyone"
// for(AlphabetsOF of Name){
//     console.log(AlphabetsOF);
// };
let Name: string = "Anyone";
let NameLength = Name.length
for (let  AlphabetsOF of Name) {
    console.log("Name=",AlphabetsOF);   

}
function hello(callback:any){
    callback()

}
let arrowfunc = (name: string)=>{
    console.log("Hello");
    
}

