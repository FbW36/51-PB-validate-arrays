function validate (array){
return array.reduce((acc,curr)=>{
    if(!(acc.includes(curr))){
        acc.push(curr)
    }
    return acc
},[])
}

console.log(validate([2,6,7,2,4,2,7,2]));
