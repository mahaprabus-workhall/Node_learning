


function admin(req,res,next){
    console.log(req.user.isAdmin)
  if(!req.user.isAdmin) return res.status(403).send('need admin acces')

    next();
}

module.exports=admin