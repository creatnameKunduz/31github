const Starbucks = {
  coffee: {
    americano: 'Классический черный кофе без молока, сильный и насыщенный вкус.',
    latte: 'Кофе с молоком и вспененной молочной шапкой, нежный вкус.',
    cappuccino: 'Кофе с равными долями эспрессо, молока и молочной пены, насыщенный вкус.',
    espresso: 'Крепкий и короткий кофе, приготовленный под высоким давлением.',
  },
  tea: {
    greenTea: 'Зелёный чай, богатый антиоксидантами и свежим вкусом.',
    blackTea: 'Чёрный чай, насыщенный и крепкий.',
    chaiLatte: 'Чайный напиток с молоком, пряностями и сладким вкусом.',
  },
  acceptOrder: function (productName) {
    if (this.coffee.hasOwnProperty(productName)) {
      console.log(`Ваш заказ: Кофе - ${productName}. ${this.coffee[productName]}`);
    } else if (this.tea.hasOwnProperty(productName)) {
      console.log(`Ваш заказ: Чай - ${productName}. ${this.tea[productName]}`);
    } else {
      console.log('Извините, такого напитка нет в меню.');
    }
  },
};

// Пример заказа
Starbucks.acceptOrder('latte'); // Ваш заказ: Кофе - latte. Кофе с молоком и вспененной молочной шапкой, нежный вкус.
Starbucks.acceptOrder('greenTea'); // Ваш заказ: Чай - greenTea. Зелёный чай, богатый антиоксидантами и свежим вкусом.
Starbucks.acceptOrder('cocoa'); // Извините, такого напитка нет в меню.
