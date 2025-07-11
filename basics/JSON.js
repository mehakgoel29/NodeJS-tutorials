// string to object 
var jsonString='{"name":"Mehak","age":21}'
var jsonObject=JSON.parse(jsonString)
console.log(jsonObject)


//object to string 
var ObjectToConvert={"name":"Mehak","age":21}
var jsonstring=JSON.stringify(ObjectToConvert)
console.log(jsonstring)
console.log(typeof(jsonObject))