

// console.log('Before')

// user(1,repo);

// function repo(user){
//     user(user.name,getRepo);
// }

// function getRepo(repo){
//      getRepo(repo,getCommit)
// }
// function getCommit(commit){
//     console.log(commit);
// }

// console.log("After")

// promise

// const email=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve(1);
//         reject('unknown');
//     })
// }).then((value)=>{
//     console.log("fulfiled",value);
// }).catch((error)=>{
//   console.log('The error is ',error);
// })

// async function find() {
//    return "Hello"
// }

// const ss=find();
// console.log(ss);
// const details=getUser(1,(user)=>{
//    getRepositories(user.name,(repos)=>{
//       getCommit(repos[0],(commit)=>{
//          console.log(commit)
//       })
//    })
// })

getUser(1)
.then(user=>getRepositories(user.name))
.then(repo=>getCommit(repo[0]))
.then(commit=>console.log(commit))
.catch(erro=>console.log('Error',erro))
.catch(err=>console.log("we have occured the error ",err));

function getUser(id){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("Get the user details")
          resolve({id:id,name:'Mahaprabu'})
      },2000)
   })
}
function getRepositories(user){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("Fetching the repositories of"+user)
         resolve(['repo1','repo2','repo3']);
      },2000)
   })
}
function getCommit(commit){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log("Fetching commits");
         resolve(commit);
      },2000)
   })
}