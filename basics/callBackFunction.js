/*var callback=()=>console.log("addition is completed");
var main =(a,b,callback)=>{
    var result=a+b;
    console.log(result);
    callback();
}

main(2,3,callback);
*/

var main =(a,b,callback)=>{
    var result=a+b;
    console.log(result);
    callback();
}

main(2,3,()=>console.log('addition is completed'))

