

// functional arguments > passing function inside another function 

function add(a,b){
    return (a+b);
}

function sumof(a,b,op){
    // let opvalue=op(a,b);
    return op(a,b);;
}

console.log(sumof(1,2,add));