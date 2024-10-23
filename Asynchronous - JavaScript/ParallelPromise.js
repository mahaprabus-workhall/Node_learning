
const p1=new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        console.log("Async 1");
       resolve('maharabu')
    },2000)
})

const p2=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("Async 2")
    reject('apple')
   })
})

Promise.race([p1,p2]).then(res=>console.log(`fullfiled ${res}`)).catch(err=>console.log(`error occured of ${err}`));
