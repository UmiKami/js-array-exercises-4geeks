let par = "Hello World"
let counts = {};

// your code here
let str = par.split(' ').join('')
let strArr = str.split('')


strArr.forEach(e=>{
    let lowerE = e.toLowerCase()
    var ocurrence = 0

    for(let i=strArr.indexOf(e); i < strArr.length; i++){
        if(lowerE == strArr[i].toLowerCase()){
            ocurrence++
        }

        if(i == strArr.length-1){
            counts[lowerE] = ocurrence
        }
    }
})


console.log(counts);