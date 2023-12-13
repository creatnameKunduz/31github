const obj = {
    coffee : {
        cappuccino: 'Капучи́но — кофейный напиток итальянской кухни на основе эспрессо с добавлением в него подогретого вспененного молока',
        latte: 'Ла́тте — кофейный напиток, на основе молока, представляющий собой трёхслойную смесь из пены, молока и кофе эспрессо. Был изобретён в Италии.',
        espresso : 'Ла́тте — кофейный напиток, на основе молока, представляющий собой трёхслойную смесь из пены, молока и кофе эспрессо. Был изобретён в Италии.',

    },
    tea: {
        blackTea: 'Чёрный чай — вид чая, подвергающийся полной ферментации в течение от двух недель до месяца. Традиционно наиболее популярный вид чая в Европе, включая Россию.',
        greenTea: 'Зелёный чай — чай, подвергнутый минимальной ферментации. И зелёный, и чёрный чай получают из листьев одного и того же чайного куста, однако различными способами.'
    }
}

const question1 = prompt('tea or coffee')
const question2 = prompt(' какой вид напитка')

if( question1 === 'tea' && question2 === 'blackTea' && obj.tea.blackTea){
    console.log('ваш заказ принят')
} else if( question1 === 'tea' && question2 === 'greenTea' && obj.tea.greenTea){
    console.log( 'ваш заказ принят')
} else if( question1 === 'coffee' && question2 === 'cappuccino' && obj.coffee.cappuccino){
    console.log( 'ваш заказ принят')
} else if( question1 === 'coffee' && question2 === 'latte' && obj.coffee.latte){
    console.log( 'ваш заказ принят')
} else if( question1 === 'coffee' && question2 === 'espresso' && obj.coffee.espresso){
    console.log( 'ваш заказ принят')
}

///// 2

const array =  ['Bishkek', 'Los Angeles', 'Chicago',  'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']


for(let i = 0; i < array.length ; i++) {
    if (array[i].length > 9) {
        console.log(array[i])
    }
}


//// 3
const number = Number(prompt('введите день недели'))

switch (number){
    case 1 :
        console.log('понидельник');
        break;
    case 2 :
        console.log('вторник');
        break;
    case 3 :
        console.log('среда');
        break;
    case 4 :
        console.log('четверг');
        break;
    case 5:
        console.log(' пятница');
        break;
    case 6:
        console.log('суббота')
        break;
    case 7:
        console.log('воскресенья')
        break;
    default:
        console.log('перепроверьте вашу запись')
        break;
}

