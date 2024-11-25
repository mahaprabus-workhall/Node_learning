
function absoulte(number){
   return number>=0?number:-number;
}

function greet(name){
   return "Welcome "+name+"!"
}

function getCurrencies(){
  return ['INR','USD','EUR']
}

function getObject(id){
   return {id:id,price:20}
}

function getException(name){
    if(!name) throw new Error('Username is required')

    return{id:new Date().getTime(),username:name}
}
module.exports.absolute=absoulte
module.exports.greet=greet
module.exports.getCurrencies=getCurrencies
module.exports.getObject=getObject
module.exports.getException=getException
