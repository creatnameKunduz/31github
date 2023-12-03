    let number= prompt('number')
    let member = prompt( 'member')
     if(number ===member) {
         alert('be happy')
     } else if(number!== member){
         alert('dont worry')
     }

     let userInn = '10923456670089'
     let firstNum = Number(userInn[0])
    if((userInn  === 0 || firstNum === 1|| firstNum ===2 ) && userInn.length === 14 ) {
        console.log('ok')
    }else{
        console.log('error')

    }



    let size ='l'
    if(size === 'm'){
        console.log(' your size 44')
    } else if(size === 's'){
        console.log('your size 42')
    } else if( size === 'l'){
        console.log('your size  46')
    } else{
        console.log('unknow your size')
    }


    switch (size){
        case  's':
            console.log('40')
            break
        case  'x':
            console.log('42')
            break
        case  'm':
            console.log('44')
            break
        default:
            console.log('UNKHOW SIZE ')
    }
     // не могу погять почему не работает
     var human = {
        name:  'Kunduz',
         age: 18,

         hobby: 'hikking',
             address:{
         city: 'Bishkek',
         street: null
     } ,
         g:undefined
    }
    console.log(human.address)
    



