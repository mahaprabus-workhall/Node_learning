const fs=require('fs')
const folder_path='../sample'
const file_name='sample.json'

function create_folder_inside_file(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('This will run only after the sync operations are done.');
          }, 0);
   
   
   
  fs.access(folder_path,(error)=>{
    if(error){
        fs.mkdir(folder_path,(error)=>{
            if(error){
               return reject('error',error)
            }
            else{
                console.log("folder_created successfully")
                fs.writeFile(`${folder_path}/${file_name}`,data,(error)=>{
                    if(error){
                        return reject('error',error)
                    }
                    else{
                       resolve('created successfully')
                    }
                })
            }
        })
    }else{
       
    //    resolve('The folder already exist')
       fs.writeFile(`${folder_path}/${file_name}`,data,(error)=>{
        if(error){
            return reject('error',error)
        }
        else{
           resolve('The folder already exist and new file changes successfully')
        }
    })
    }
  })   

})
}



module.exports.create_folder_inside_file=create_folder_inside_file