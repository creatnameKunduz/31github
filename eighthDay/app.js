let number =[123,234,256, 345,456,567,543,67,55,23,28,50]
let newArray =[];
for(let i=0; i<number.length;
    i++) {
    const numberString =number[i].toString()
    if (numberString[0]==='2'|| numberString[0]==='5'){
        newArray.push(number[i]);
    }
}
        function getDataType(input){
    let type = typeof input;
    console.log(type)
}
getDataType(false);
getDataType('hello world!');
getDataType(42);

// 3)
const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

const tagsRegister = {};

for (const tag of tags) {
    if (tagsRegister[tag]) {
        tagsRegister[tag] += 1;
    } else {
        tagsRegister[tag] = 1;
    }
}
console.log(tagsRegister);

