//var day= Number(prompt('enter day-'))
//var day month =Number(prompt('enter day-'))

// if(day>= 21 && day <= 31 && month==='март')

//var UserINN = '10909200000768'
//var firstNum = Number(UserINN[0])
//if((firstNum === 0 || firstNum === 1 || firstNum === 2) && UserINN.length === 14{
    //console.log('иин прошел проверку')
//}else{
   // console.log('error')
//}

//4)anderfined неопрделенный
let name;
console.log( typeof name)
//5) null
let nothing = null
console.log(typeof nothing)

//NaN
var nan=78 *'6san'
console.log(typeof  nan)

//switch..case
var size = 'l'.toLowerCase()
    if( size ==='m') {
        console.log('44')
    } else if(size ==='s') {
        console.log('40')
    }else if(size ==='l'){
        console.log('46')
    }else{
        console.log('unknow size')
    }

    //
switch (size){
    case 's':
        console.log('40')
        break
    case 'm':
        break
    case 'l':
        console.log('46')
        break
    default: //after case put:
        console.log('unknow size')
}
 // 6) object сложный тиктант
var human = {
        name: 'Aidana',
          surname: 'Bekova',
          age:45,
        isMarried: false,
        address:{
            city: 'Bishkek',
            street: null
        },
        g:undefined,

}
    console.log(human)
    console.log(human.name)
    console.log(human.address.street)
//metod
human.course ='GEERS' /
delete human.age // delete
human['isMarried'] = true /
console.log(human)
console.log(Object.values(human))
console.log(Object.keys(human))
console.log(Object.entries(human))
console.log(human.hasOwnProperty('name'))

//array массив
var array = ['a', 'b' , 'ctct', 'd ', 90 ]
console.log(typeof array [4])
//переопределение переменных
var num = 10
num='qwerty'
console.log(num)

// циклы
 //for
// var i=0
// var i=i +1
//var i+=1
//var i++
// for(var i = 0;  i <=10; i++ ){
//     console.log(i)
// }
var names =[ 'kunduz' , 'erzhan' , 'jhanylai' , 'dairova' ]
var blackList = [ 'tim', 'sem', 'kunduz']
for(var i = 0; i< names.length; i++){
    if(blackList.includes(names[i].toLowerCase())){
        console.warn(`${names[i]} in blackList`)
        continue
    }
    console.log(`welcome, dear guest ${names[i]}`)
}
