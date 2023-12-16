// стрелочная функция
var getPositionElement = (element, array )=> {
    for(var i=0; i< array.length; i++){
        if(array[i]===element){ // деньги для каждой строки
            return console.log(i)
        }
    }
    return console.log('404') // 404 страницв не найдена пробоема фронта---200 для бэкенда 500- проблемыои
}

getPositionElement (4 , [5,6,7,8,9.10])
//стреличная групп LAMBDA
var maxNum =(num1, num2) => console.log(num1> num2 ? num1: num2 )
maxNum(3 , 5)

//HOF
 var alertName=(funcName)=>funcName()

     var windowName = ()=> alert ('Kunduz')
 alertName(windowName)
var button = document.querySelector('button ')
function buttonClick(){
    return console.log('click!')
}
button.addEventListener('click', buttonClick )




var sumArray =(array)=>{
    var sum=0
    for(var i=0; i<array.length; i++){
        sum += array[i]
    }
    return console.log(sum)
}
sumArray([1,2,3])

//напишите функцию, которая принимает массив.
// Функция должна пройтись по массиву и вывести сумму всех чисел


function  myFunction (a,b, c) {
    console.log(a+b+c);
}
var array = [1,2 ,3 ];
myFunction.apply(null, array)


//DOM ЭЛЕМЕНТЫ
//консоль dir
console.dir(document.body.style.background='blue')
var text=document.getElementsByClassName('text')
console.log(text)
text[1].innerHTML='HELLO GUYS'
text[1].style.color='red'
text[2].innerHTML='DONT WORRY, BE HAPPY'
text[2].style.color='white'


 var btn = document.getElementById('btn')
btn.onclick =()=> console.log('click')

