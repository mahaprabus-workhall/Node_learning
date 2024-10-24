

// console.log("hello world");

// function Getdata(){
//     return new Promise((resolve,reject)=>{
//         console.log("...///.....")
//         setTimeout(()=>{
//             console.log("Waiting..");
//             resolve(1);
//         },3000)
//     })
// }

// async function get(){
//     console.log("Start..async")
//     const value =await Getdata();
//     console.log("Result :",value);

//     console.log("end..async")
// }

// console.log("Pause the below code function")

// get();

// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2));


const fs = require('fs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function getDataFromFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject('Error reading file');
      } else {
        resolve(JSON.parse(data));
        console.log("completed 1");
      }
    });
  });
}

async function fetchDataFromAPI(url) {
  try {
    console.log("server ........")
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Fetching API data failed');
  }
}

async function processAllData() {
  try {
    console.log('Start processing');

    const [fileData, apiData] = await Promise.all([
      getDataFromFile('data.json'),
      fetchDataFromAPI('https://jsonplaceholder.typicode.com/todos/1')
    ]);

    console.log('File Data:', fileData);
    console.log('API Data:', apiData);

    console.log('Processing complete');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processAllData();
console.log('Initiated data processing');
