// object
  let human = {
    name: 'KUNDUZ',
    surname: 'MUTALIPOVA',
    id: 1202,
    number: null,
    address :{
        city: 'Bishkek',
        street: 'Repina',
    }
}
console.log(human.name, human.address)
// методы
human.name = 'Geeks'
delete human.id
human['number'] = 2005
console.log(human)
console.log(Object.keys(human))
console.log(Object.entries(human))
console.log(human.hasOwnProperty('name'))
console.log(human.hasOwnProperty('id')) // поиск обьектов



//циклы
// var i =100
// while (i<=10){
//     console.log(i)
//     i++
// }
//
//переменные короткого обновления
// i=i+1
// i=+1
//  i++


var coffee =['Каппучино', 'Латте', 'Экспрессо']
var coffeeFor = 'Каппучино'
var i = 0
while(i< coffee.length){
    if(coffee[i] === coffeeFor){
        console.log(`Coffee found on index ${i}` , i )
    } else{
        console.error( 'error')
    }
    i++
}


// for (var  i=0; i <= 10; i++){
//     console.log(i)
// }
//


var name = ['Anna', 'Jack', 'Sam']
for(var i=0; i<name.length; i++){
    if(name[i][0]==='a'|| name[i][0] === 'A'){
        console.log(name[i])

    }
}

 var nums = [12,32,33,34,1,5,7,9,67]
 for(var i=0; i<nums.length; i++){
     if(i % 2 ===0 ){
         console.log(i)
     }
 }
// for of
var numbers =[1,2,3]
for(var num of Object.keys(human)){
    console.log(num)
}

// for in
for(var key in numbers){
    console.log(key)
}
