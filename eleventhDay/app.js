 let name =prompt( 'write you order')
switch (name) {
    case 'Каппучино':
        alert('Капучи́но[1] (от итал. cappuccino — капуцин) — кофейный напиток итальянской кухни на основе эспрессо с добавлением в него подогретого до 65 градусов вспененного молока.');
        break;
    case 'латте':
      alert('Ла́тте (английский сокращённый вариант от итал. caffè latte [kaffeˈllatte] — «кофе с молоком»)[1] — кофейный напиток на основе молока, представляющий собой трёхслойную смесь из молочной пены, молока (latte) и кофе эспрессо.');
    default:
        alert('You have  mistake')
        break;
}



let a = 2+10;
switch (a) {
    case 2:
        alert('try');
    case 56:
        alert('try again');
    case 12:
        alert('well done ');
    default:
        alert('you have problem');

}

 const number = prompt('Введите чилло от 0  и 3 ')

    switch (parseInt(number)) {
            case 0:
            alert('Вы ввели число 0');
            break;
            case 1:
                alert('Вы ввели число 1');
                break;
            case 2:
            case 3:
                alert('Вы ввели число 2, а может и 3 ');
        default:
            alert(' что то произошло и не дошло');
            break;
        }



        let  browser = prompt('Введите имя браузера');

      if(browser === 'Edge'){
          alert('You\'ve got the Edge!');
      }
      else if( browser==='Chrome'){
          alert('Okay we support these browsers too');
      }
      else if  ( browser==='FireFox'){
          alert('We hope that this page looks ok!');
      } else{
          alert('Мы не распознали ваш браузер')
      }