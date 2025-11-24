

let message: string="Hello";
console.log(message);
//message =0//Error

//Prinitive types
let booleanVar:boolean=true;
let numberVar:number=42;
let symbolVar: symbol= Symbol("unique");
let nullVar:null=null;
let undefinedVar:undefined=undefined;
let anyVar:any="Could be anything"
 anyVar=anyVar +100; //no error

 let unknowVar:unknown="could be anything too";
 //unknownVar=unknownVar+100; //error
 //unknown is type assertion

 let scores:number[]=[90,80,70];
 console.log(scores)
 //typles
 let tupleVar:[string,number]=["Alice",30];
 console.log(tupleVar)
 //tupleVar=[30,"Alice"]//error

 //Union
 let id:string | number;
 id="hello";
 console.log(id)
 id=120;
 console.log(id);
 //id=true //error

 //function
 function add(num1:number,num2:number):string{
    let sum:number=num1 +num2;
    return `Sum is $(sum)`;
 }
 let result:string =add(10,20);
 console.log(result)

 const greet=(name: string="Guest"): void=>{
    console.log(`Hello,${name}`);

 }
 greet();// name is optional if default value

 //Objet Defination
 //1. Object Literal
 let person :{name:string; age: number}={
    name:"Bob",
    age:25,
    //isActive:true //error
};
console.log(person,person.name);

//2.Interface
interface Product{
    id:number;
    name:string;
    price:number;
    description?:string;// optional
}
const laptop:Product ={
    id:1,
    name:"Laptop",
    price:1500
};
console.log(laptop);

//3.TypeAlies
type Student ={
    id:number;
    name:string;
    grade:string;
    product?:Product

}
let student1:Student ={
    id:100,
    name:"Chalie",grade:"A",
    product:laptop
};
console.log(student1);


//generics
function identify<T>(arg:T):T{
    return arg;

}
//data type injected at call time
let output1:string =identify<string>("myString");
console.log(output1);
let output2: number =identify<number>(100);
console.log(output2);

//enum
//named constant
enum Role{
    Admin,
    User,
    Guest
}
let userRole:Role =Role.Admin;
console.log(userRole); //0
console.log(userRole == Role.Admin) // constant chheck

let userRoleName: string ="admin";
console.log(userRoleName == "Admin") // case senstive check

//Generic Usercase
interface User{
    id: number;
    name:string;
    role:Role;
}
let optUser:Partial <User> ={
    name:"Dave"
};
//every sttributes is optional
console.log(optUser);
let readonlyUser:Readonly<User> ={
    id:1,
    name:"Eva",
    role:Role.User
};
// readomlyUser .id=2; // Error
console.log(readonlyUser)

//Tasks
// Create enum for carType:Sedan,SUV,Truck,Coupe.
//creatye a type carModel
//-name:string,description:string
//create an interface for a car with properties
//make:string or number,model :Carmodel,
//year:number,
//type:carType,and isElectric (optional)boolean or number or string.
//create a array of cars with at least 3 car objects.
//filter the cars whose year is greater than 2015

enum carType{
    sedan,
    SUV,Truck,
    Coupe
}
type carModel={
    name:String;
    description:string;
}
interface Car{
    make:string | number;
    model:carModel;
    year:number;
    type:carType;
    isElectric7:boolean | number | string
}