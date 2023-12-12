var myArray =['name', 'John', 'lastname', 'Black', 'age', '23'];
var myFunction={};
for (let i = 0; i < myArray.length; i += 2) {
    var key = myArray[i];
    var value = myArray[i + 1];
    myFunction[key] = value;
}

console.log(myFunction);

//2
function sum() {
    var result =0;

for (var i=0; i < arguments.length; i++){
 result +=arguments [i];
}
return result;
}

console.log(sum(1,2,3,4,5,6,7));
console.log(sum(10,20,30,40,50));


//3
function getDataType(value) {
    var type = typeof value;
    console.log(type);
}


getDataType(false);           // Выведет "boolean"
getDataType('hello world!');  // Выведет "string"
getDataType(42);              // Выведет "number"
