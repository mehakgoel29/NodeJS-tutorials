const ages=[32,89,67,45,12,10]
const result=ages.filter(checkAge);  //creates a new array with only those elements that pass a condition (test) given in a callback function.
function checkAge(age){
    return age<=12;
}
console.log(result)



// Methods to declare and use function in js 
function add(a,b){
    return a+b;
}

var add=function(a,b){
    return a+b;
}

var add=(a,b)=>{return a+b}
var add=(a,b)=> a+b;

var res = add(2,3);
console.log(res);
console.log(add(2,3))



// self invoking function
var a=(function(a,b){ return a+b})(2,3);
console.log(a)

var arrow=((a,b)=>a+b)(2,2);
console.log(arrow);

