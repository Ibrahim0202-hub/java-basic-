// let info={
//     student:"ibrahim",
//     marks:94.5,
//     printMarks:function() {
//         console.log("marks=",this,marks);
//     },
// }

    
// let sum=0;
// for(let i=1;i<=5;i++){
// sum=sum+i;
// }
// console.log("sum=",sum);
// console.log("loop has been eneded");



// for(let num=0;num<=100;num++){
//     // if(num%2==0){
//     if(num%2!==0){
//     console.log("num=",num);
// }
// }

 



// const employee={
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// };


// const karanArjun={
//     salary:50000,
// };

// let karanArjun1={
//     salary:40000,
// };


// karanArjun.__proto__=employee;
// karanArjun1.__proto__=employee;


// class ToyotaCar{
//     constructor(brand,mileage){
//         console.log("creating new object")
//         this.brand=brand;
//         this.mileage= mileage
//     }
    




//     start(){
//         console.log("start");
//     }


//   stop() {
//         console.log("stop");
//   }

   
// }
//  let fortuner= new ToyotaCar("fortuner",10);
//  console.log(fortuner);
// let lexus =new ToyotaCar("lexus",12);
// console.log(lexus);




// inhertance

// class Person{
//     constructor(){
//         this.species="homo sapines"
//     }
//     eat(){
//         console.log("eat");

//     }
//     sleep(){
//         console.log("sleep")
//     }
//     work(){
//         console.log("work")

//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("soleve problem");
//     }

// }

// let ibrahimObj = new Engineer()

// single inherits
// class Parent {
//   eat() {
//     console.log("Eating...");
//   }
// }

// class Child extends Parent {}


// multilevel 
// class A {
//   show() {
//     console.log("This is class A");
//   }
// }

// class B extends A {}

// class C extends B {}

// let obj = new C();  
// obj.show();          



class Animal {
    show(){
        console.log("animals");
    }
}
class Dog extends Animal {}
class Cat extends Animal {}
