let fruits=["سیب","موز"];
fruits.push("پرتغال");
console.log(fruits.length);
fruits.pop();
console.log(fruits.length);
fruits.unshift("انگور");
console.log(fruits.length);
fruits.shift();
console.log(fruits.length);
let numbers=[10,20,30,40,50];
console.log(numbers.includes(40));
console.log(numbers.includes(100));
console.log(numbers.slice(1,3));
console.log(numbers.join("-"));
function sumarray(numbers){
    let sum = 0;
    for(let i= 0; i < numbers.length ; i++){
        sum = sum + numbers[i] ; 
    }
    return sum ;
}
console.log(sumarray([10,20,30]));

function findMax(number){
    let max = number[0];
    for(let i=0 ;i< number.length ;i++){
        if(number[i]>max){
            max=number[i];
        }
    }
    return max;
}
console.log(findMax([10,20,30,40,50]));

function filterEven(num){
    list=[];
    for(let i=0 ; i <num.length ;i++ ){
        if(num[i]%2===0){
            list.push(num[i]);

        }
    }
    return list;
}
console.log(filterEven([10,11,12,13,14,15,16,18,20]));
