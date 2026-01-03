// setTimeout(()=>{
//     console.log("hello")
// },3000);

// console.log("one ")




// callbacks
// function sum(a,b){
//     console.log(a+b)
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(1,2,sum);


// let hello=()=>{
//     console.log("hello");
// };
// setTimeout(hello,3000);



// callbacks 
// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId);
       
//     },2000);
// }
// getData(1).then((res)=>{
//     console.log(res)

// })

    


// Promises

// let promise = new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     resolve("success");
// });

// getData



// let myPromise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
// });

// console.log(myPromise);




// Promises chain

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId)
//             resolve("success")
            
//         },2000);
//     })
// }

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     })

// })


// async await 

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//        console.log("weatherData")
//     resolve("success")
//     },2000);
//     })
// }

// (async function (){
//      console.log("gettingWeather Data1...")
//     await api(1);
//     console.log("gettingWeather Data2...")
//     await api(2);
//        console.log("gettingWeather Data3...")
//     await api(3);
// })();






// Fetch API

let URL = "https://official-joke-api.appspot.com/random_joke";

const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");

let getfact = async () => {
    console.log("getting data");

    let response = await fetch(URL);
    let data = await response.json();

    // using innerText (simple way)
    factPara.innerText = data.setup + "\n\n" + data.punchline;
};

btn.addEventListener("click", getfact);
