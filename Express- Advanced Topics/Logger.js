function newMid(req,res,next){
    console.log("Authenticating");
    next();
}

module.exports=newMid;