// for Loop
// let sum=0
// for(let i=1;i<=5;i++){
//     sum=sum+i;
    
// }
// console.log("sum=",sum);
// console.log("loop has been ended");

// While Loop
// let i=1
// while(i<=10){
//     console.log("i=",i);
//     i++
// }

// Do while loop
// let i =1;
// do{
//     console.log("i=",1);
//     i++;

// }while (i<=5);

// For-of loop
// let str="ibrahim khaleel";
// let size=0;
// for(let i of str){
// console.log("i=",i);
// size++;
// }
// console.log("string size=",size);

// For in loop
// let student ={
//     name:"ibrahim",
//     age:21,
//     cgpa:7.1,
//     isPass:true,

// };
// for(let key in student){
//     console.log("key=",key,"val=", student[key]);
// }

// practice question
// print all the even number under 1 to 100
for(let num=0;num<=100;num++){
    if(num%2===0)
    console.log("num=",num);
}

// guessing game number 
// let gameNum=45;
// let userNum=prompt ("enter the game number:");
// while (gameNum != userNum){
//     userNum=prompt ("you have entered the wrong number");

    
// }
// console.log("congrats you have enterd the right number");

// done by me
// let wholsalePrice=70;
// let marketPrice=prompt ("enter the correct price of market:");
// while (wholsalePrice != marketPrice){
//     marketPrice=prompt("you have entered the wrong price");

// }
// console.log("congrats you have enterd the right number");



// STRING

// let str="ibrahim"
// let str2="khaleel"
// console.log(str[0]);


// upper case
// let str="ibrahimkhaleel"
// let newStr= str.toLocaleUpperCase()  [new string is updated]
// console.log(str);
// console.log(newStr);

// practice question
// let fullName = prompt("emter your fullname without any spaces");
// let username="@"+fullName+fullName.length;  //here the concat method is used
// console.log(username);


// array ex should be present in index []
// let fruits=["apple","mango","banana"];
// console.log(fruits[0]);
// console.log(fruits[1]);

// function ex
// function greet(name) {
//   return "Hello " + name + "!";
// }

// console.log(greet("Ibrahim")); // Hello Ibrahim!
  

// example of collecting datatypes
// const student={
//     fullName:"ibrahim",
//     age:21,
//     cgpa:8.2,
//     isPass:true,
// }
// console.log(student.age);
// console.log(student['fullName']);
// student['age']=student['age']+1;
// student['Name']="ibrahimkhaleel";
// console.log(student);

// string interpolation example +,$

// let name = "Ibrahim";
// let age = 21;
// // Without interpolation (using concatenation)
// console.log("My name is " + name + " and I am " + age + " years old.");
// // With interpolation (using template literals)
// console.log(`My name is ${name} and I am ${age} years old.`);

// trim example

// let str="     ibrahimkhaleeljs         ";
// str=str.trim();
// console.log(str);

// let str = 'ilovejs';

// console.log(str.charAt(0)); // i



// ARRAYS
// let marks=[89,65,75,45,76,98]
// console.log(marks);

// Arrays in for loop

// let heroes=["thor","spiderman","ironman","antman"]
// for(let i =0; i<heroes.length;i++){
//     console.log(heroes[i]);
// };

// for-of loop
// let cities=["bengaluru","mumbai","hyd","goa"]
// for (let city of cities) {
//     console.log(city.toUpperCase())
//     console.log(city.toLowerCase());
// };

// Practice question find the avg of class
// let marks=[85,97,44,37,76,60]
// let sum=0;
// for(let val of marks){
//     sum += val
//     console.log(val);
// }
// let avg = sum/marks.length;
// console.log(`avg of marks of class=${avg}`);


// adding two numbers
// let number=[87,76];
// sum=0;
// for(let val of number){
//     sum += val;
    
// }
// console.log(sum);

// discount on items
// let items=[250,643,300,900,50]
// for(let i=0; i<items.length; i++){
//     let offer= items[i]/10;
//     items[i]-= offer;
    
// }
// console.log(items );
// console.log("after giving the discount of 10%")

// ARRAY METHODS pop

// let foodItems=['apple','tomato','onion','banana']
// console.log(foodItems);
// let deletedItem=foodItems.pop();
// console.log("deleted",deletedItem);

// concate
// let marvelHeroes=['thor','spiderman','ironman']
// let dcHeroes=['superman','batman'];
// let heroes=marvelHeroes.concat(dcHeroes);
// console.log(heroes);



// create a array to store the comapnies[boomberg microsoft google ibm netflix]
//  * remove the first comapany from the array 
//  * remove uber add ola in its place
//  * add amazon at the end
  
// let comapanies=["boomberg","microsoft", "uber","google","ibm","netflix"];
// comapanies.shift()    * shift() is used to remove the first arrya
// comapanies.splice(2,1,"ola");  * add the array splice method
// comapanies.push("Amazon");   * Add array at the last

// let student ={
//     name:"ibrahim",
//     age:21,
//     cgpa:7.1,
//     isPass:true,

// };
// for(let key in student){
//     console.log("key=",key,"val=", student[key]);
// }



// print all the even and odd number 
// for (let num = 1; num <= 100; num++) {
//   if (num % 2 !== 0) {
//     console.log("Odd number =", num);
//   } else {
//     console.log("Even number =", num);
//   }
// }



// let obj={
//     item:"Pen",
//     price:10,
// };
// let output=`the cost of${obj.item} is &{obj.10}rupees`
// console.log(output);

// let name="ibrahim"
// let age=21
// console.log(`my name is ${name} and im ${age}years old.`);


// let str="hellow";
// console.log(str.charAt("h",));

// // for-of loop
// let cities=["bengaluru","mumbai","hyd","goa"]
// for (let city of cities) {
//     console.log(city.toUpperCase())
//     console.log(city.toLowerCase());
// };




// let marks=[85,97,44,37,76,60]
// let sum=0;
// for(let val of marks){
//     sum += val
//     console.log(val);
// }
// let avg = sum/marks.length;
// console.log(`avg of marks of class=${avg}`);


// let prices=[250,645,300,900,50];
// let total=0;
// for(let price of prices){
//    let discount=price*10/100;
//    let finalprice=price-discount;
//     total+=finalprice
    
    
// }


// let marks = [85, 97, 44, 37, 76, 60];

// let highest = marks[0]; // assume first mark is highest
// let lowest = marks[0];  // assume first mark is lowest

// for (let val of marks) {
//     if (val > highest) {
//         highest = val; // update highest if current mark is greater
//     }
//     if (val < lowest) {
//         lowest = val; // update lowest if current mark is smaller
//     }
// }

// console.log(`Highest mark = ${highest}`);
// console.log(`Lowest mark = ${lowest}`);

// let difference = highest - lowest;
// console.log(`Difference = ${difference}`);


// console.log(`total amount after discount=${total}`);

// let number=[2, 5, 8, 11, 14, 17];
// for (let num of number){
//     if(num %2===0){
//          console.log(num+" is even");
// }else{c
//        console.log(num+ " is odd");

// }
// }


let marvelHeroes=[1,34,7,8,6];
marvelHeroes.slice(1,3);

