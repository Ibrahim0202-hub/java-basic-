// //  arrow function
// const arrowSum=(a,b)=>{
//     console.log(a*b);
// }   
// in console just type arrowsum give the number to div mul etc..


// creat a function using "function" keyword that 
// a string as an argument & return the number of
// vowel in string
 
// function countVowel(str){
//     let count=0;
//     for(let char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
            
//         }
//     }
//     return count;
// }

// forEach loop
// let arr=["benguluru","mumbai","pune"];
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// })



// print the square of each array
// let num=[1,4,5,6,9];
// num.forEach((num)=>{
//     console.log(num*num);

// }) 

// filtering the even number 
// let arr=[2,3,4,5,6,7,23,4,5,6,78,9,0];
// let evenArr=arr.filter((val)=>{
    
//     return val %2===0;

// })


// reduce
// let arr=[1,3,5,];
// let output=arr.reduce((val,curr)=>{
//     return val + curr
// })
// console.log(output);


// Take a number n as input from user.
// Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array

// let n=prompt("enter the number");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum=arr.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log("sum",sum);
// let factorial=arr.reduce((res,curr)=>{
//     return res*curr;

// })
// console.log("factorial",factorial);

//  palindrome without using libeary

// let str="level"
// let reverse=[];
// for(let i=str.length-1; i<=0; i--){
//     reverse+=str[i];
// }
// if(str=== reverse){
// console.log("it is a palindrome");
// }else{
//     console.log("it is not a palindrome");
// }

// matrix
// Two matrices
// let A = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];

// let B = [
//   [7, 8],
//   [9, 10],
//   [11, 12]
// ];

// // Result matrix (filled with 0s at the start)
// let result = [
//   [0, 0],
//   [0, 0]
// ];

// // Multiply matrices
// for (let i = 0; i < A.length; i++) {           // rows of A
//   for (let j = 0; j < B[0].length; j++) {      // columns of B
//     for (let k = 0; k < B.length; k++) {       // columns of A = rows of B
//       result[i][j] += A[i][k] * B[k][j];
//     }
//   }
// }

// // Print result
// console.log("Result matrix:");
// console.log(result);



// DOM manipulation

// let heading=document.getElementsById("heading")
// console.dir("headings");
// console.log("headings");

// let headings = document.getElementsByClassName("headings");
// console.dir(headings);
// console.log(headings) ;

// let para = document.getElementsByTagName("p");
// console.dir(para)

// let firstEle=document.querySelector("clickme");
// console.log(firstEle);
 
// let allEle=document.querySelectorAll("#clickme!");
// console.dir(allEle);


// let heading= document.querySelector("h1");


// 1 practice question
// create a h2 heading element with "hellow world"
// append to from "ibrahim khaleel" to using js
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText)
 
// h2.innerText=h2.innerText+ "from ibrahim khaleel";

// 2 create 3 divs with common class name-"box",
// access them & add unique text to each of them
  
// let divs = document.querySelectorAll(".box");
// let idx=1;
// for(div of divs){
//   div.innerText=`mew unique value ${idx}`;
//   idx++;
// }



//  palimdrome
// let str="level";
// let reverse=[];
// for(let i=str.length-1; i<=0; i--){
//   reverse+=str[i];
// }
// if(str=== reverse){
//   console.log("its is a palindrome");
// }else{
//   console.log("its is not a palindrome");
// }



// function myJava(message){
//     console.log(message)
//     console.log("welcome to java script");
//     console.log("learning java script")

// }
// myJava("i love js ");



// function sum(x,y){
//     console.log(x+y)
    

// }
// sum(7,6);



// let arr1=[3,6,7];
// let arr2=[5,6,8];
// let result=[];
// for(let i=0;i<arr1.length;i++){
//     result.push(arr1[i]*arr2[i])
// }
// console.log("result",result);



// const add = (a, b) => a + b;

// console.log(add(5, 3)); //


// let arr=["benguluru","mumbai","pune"];
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// })



// let arr=[2,3,4,5,6,7,23,4,5,6,78,9,0];
// let evenArr=arr.filter((val)=>{
    
//     return val  %2!==0;

// });
// console.log(evenArr);

// // reduce
// let arr=[1,3,5,];
// let output=arr.reduce((val,curr)=>{
//     return val + curr
// })
// console.log(output);


// let arr = [89, 45, 90, 67, 78, 77, 79, 90, 91];

// let topper = arr.filter((val) => {
//     return val > 90;
// });

// console.log(topper);

// setTimeout(() => {
//   console.log("Time’s up!");
// }, 10000);

// let n=prompt("enter the number");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum=arr.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log("sum",sum);
// let factorial=arr.reduce((res,curr)=>{
//     return res*curr;

// })

// let allEle=document.querySelector("p");
// console.dir(allEle);
 
// let firstEle=document.querySelector("p");
// console.dir(firstEle);



// let arr1=[3,6,7];
// let arr2=[5,6,8];
// let result=[];
// for(let i=0;i<arr1.length;i++){
//     result.push(arr1[i]*arr2[i])
// }
// console.log("result",result);



//  palimdrome
// let str="mom";
// let reverse=[];
// for (let i = str.length - 1; i >= 0; i--) {
//   reverse+=str[i];
// }
// if(str=== reverse){
//   console.log("its is a palindrome");
// }else{
//   console.log("its is not a palindrome");
// }


// let add=(a,b)=>a+b;
//     console.log(add(5,3));


// let arr=[1,3,4];
// arr.forEach((val) => {
//     console.log(val);
// })

let heading=document.getElementById("heading")
console.log(heading);