//Using References (Normalization) ->Consistency
let author={
    name:'Mosh'
}

let course={
    author:'id'
}

//using Embedded Documents (Denormalization)->Performance

let courses={
    author:{
        name:'Mosh'
    }
}

//hybrid

let coursess={
    author:{
        id:'ref',
        name:'Mosh'
    }
}