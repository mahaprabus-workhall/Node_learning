console.log("Before")

app(1,function(res){
    console.log(res)
    getRepo(res.name,function(value){
        console.log("value",value);
        getCommit(value[0],function(commit){
            console.log(commit);
        })
    })
});


console.log("After")

function app(id,callback){
    setTimeout(()=>{
        callback({id:id,name:'maha'});
    },2000);
}

function getRepo(name,callback){
    setTimeout(()=>{
        console.log("Getting a repository details ")
        callback(['repo1','repo2','repo3']);
    },4000-2000)
}

function getCommit(repo,callback){
    setTimeout(()=>{
        callback("console")
    })
}