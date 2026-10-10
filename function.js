function add(a,b){
    return(a+b);
}
function greet(name){
    console.log("سلام"+" "+name+"!");
}
function isEven(a){
    if(a % 2 === 0){
        return "زوج";
    }
    else{
        return "فرد";
    }
}
function area(a,b){
    return (a*b);
}
function calculate(num1,num2,operator){
    if(operator==="+"){
        return (num1+num2) ;
    }
    else if(operator==="-"){
        return (num1-num2) ;
    }
    else if(operator==="*"){
        return (num1*num2) ;

    }
    else{
        return (num1/num2) ;
    }
}
console.log(add(3,5));
greet("سارا");
greet("علی");
console.log(isEven(15));
console.log(isEven(8));
console.log(area(10,20));
console.log(calculate(10,5,"*"));