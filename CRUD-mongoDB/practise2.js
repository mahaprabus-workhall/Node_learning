// const promise1 = Promise.resolve('Data from promise1');
// const promise2 = Promise.resolve('Data from promise2');
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve("Data frok p3"), 1000, 'Error in promise3'));


// const p4=()=>{
//     console.log("Hello");
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             resolve("Sucess is the power of our ability checking")
//         },1000)
//     })
// }
// Promise.all([promise1, promise2, promise3,p4()])
//   .then((results) => {
//     console.log('All promises resolved:', results);
//   })
//   .catch((error) => {
//     console.error('One or more promises failed:', error);
//   });


//   console.log("start");

/////////////////////////////////////////////////////////////////////////////////////////////////

// console.log('Line 1');
// console.log('Line 2');
// console.log('Line 3');
// console.log('Line 4');
// console.log('Line 5');

// function doSomething() {
//   console.log('Inside function: Start');
//   // Simulate an async operation
//   setTimeout(() => {
//     console.log('Inside function: Async operation complete');
//   }, 1000);
//   console.log('Inside function: End');
// }

// doSomething();

// console.log("say hello before u die");
// console.log('Line 6');
// // More lines up to 30...


////////////////////////////////////////////////////////////////////////////////////////////



// console.log('Line 1');

// setTimeout(() => {
//   console.log('Line 2');
// }, 3000);

// console.log('Line 3');

// function asyncFunction() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Line 4');
//       resolve();
//     }, 2000);
//   });
// }

// asyncFunction().then(() => {
//   console.log('Line 5');
// });

// console.log('Line 6');

// setTimeout(() => {
//   console.log('Line 7');
// }, 1000);

// console.log('Line 8');

// async function asyncAwaitFunction() {
//   console.log('Line 9');
//   await new Promise(resolve => setTimeout(resolve, 500));
//   console.log('Line 10');
// }

// asyncAwaitFunction();

// console.log('Line 11');



/////////////////////////////////////////////////////////////////////////////



console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 1900);

console.log('After Timeout 1 setup');

setTimeout(() => {
  console.log('Timeout 2');
}, 500);

console.log('After Timeout 2 setup');

new Promise((resolve) => {
  console.log('Promise 1 start');
  setTimeout(() => {
    console.log('Promise 1 end');
    resolve();
  }, 1000);
}).then(() => {
  console.log('Promise 1 resolved');
});

console.log('After Promise 1 setup');

async function asyncFunc() {
  console.log('Async function start');
  await new Promise(resolve => setTimeout(resolve, 100));
  console.log('Async function end');

  await new Promise(resolve=>setTimeout(resolve(),2100))

  console.log('Async function end....................');
}




asyncFunc();
console.log('End');
