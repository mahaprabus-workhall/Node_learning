
const config=require('config')
module.exports=function(){
    if(!config.get('JwtPrivateKey')){
        throw new Error('Fatal Error')
        // process.exit(1)
    }
}