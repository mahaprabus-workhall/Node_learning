
const userrepodetails=[

]
async function start(){
    const getuser=user(1)
    console.log(getuser);
    console.log("Iterations...")
    for(const val of getuser){
        if(val.gold){
            const userd={
                id:userrepodetails.length+1,
                name:val.name,
                email:val.email
            }
            userrepodetails.push(userd);
        }
    }
    console.log("Process the repo details only for goldmember....");
    console.log(userrepodetails)
    for(const data of userrepodetails){
        const repo = await getRepo();
        console.log(repo);

        const email=await sendEmail(data.email);
        console.log(email);
    }
   
}

start();


function sendEmail(email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(`Email sent sucessfully to ${email}`);
        },500)
    })
}
function user(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fetching...")
            resolve([{
                id:id,
                name:"Mahaprabu",
                email:"mahaprabu@gmail.com",
                gold:true
            },
            {
                id:id,
                name:"chendhur",
                email:"chendhurg@gmail.com",
                gold:false
            },
            {
                id:id,
                name:"Dhanusick",
                email:"dhanusick@gmail.com",
                gold:true
            },
            {
                id:id,
                name:"Prabanjan",
                email:"prabanjan@gmail.com",
                gold:false
            },
            {
                id:id,
                name:"ram",
                email:"ram@gmail.com",
                gold:true
            },]);
        },2000)
    })
}

function getRepo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Repo details");
            resolve(['repo1','repo2','repo3'])
        },4000)
    })
}