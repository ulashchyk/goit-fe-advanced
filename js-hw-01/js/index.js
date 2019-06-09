'use strict'
//Задача 1

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
message = prompt('Введите пароль администратора');
if(message === null) {
    message = 'Отменено пользователем!'
} else if(message === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
} else {message = 'Доступ запрещен, неверный пароль!'};
alert(message);

// Задача 2

let credits = 23580;
let pricePerDriod = 3000;
let totalPrice;
let droidsQuantity;

droidsQuantity = Number(prompt('Сколько дроидов Вы хотели бы приобрести?'));
if(droidsQuantity === 0) {console.log('Отменено пользователем!')} 
else if(Number.isNaN(droidsQuantity) === true) {console.log('Введите правильное количество')}
else if ((totalPrice = droidsQuantity * pricePerDriod) > credits) {
    console.log('Недостаточно средств на счету!')} 
    else {console.log(`Вы купили ${droidsQuantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)};

// Зачада 3

let chosenCountry;
let shippingPrice;
chosenCountry = prompt('Укажите доставка в какую страну Вас интересует?').toLowerCase();
switch(chosenCountry) {
    case 'китай':
        shippingPrice = 100; console.log(`Доставка в ${chosenCountry} будет стоить ${shippingPrice} кредитов`);
        break;
        case 'южная америка':
        shippingPrice = 250; console.log(`Доставка в ${chosenCountry} будет стоить ${shippingPrice} кредитов`);
        break;
        case 'австралия':
        shippingPrice = 170; console.log(`Доставка в ${chosenCountry} будет стоить ${shippingPrice} кредитов`);
        break;
        case 'индия':
        shippingPrice = 80; console.log(`Доставка в ${chosenCountry} будет стоить ${shippingPrice} кредитов`);
        break;
        case 'ямайка':
        shippingPrice = 120; console.log(`Доставка в ${chosenCountry} будет стоить ${shippingPrice} кредитов`);
        break;
        default:
            console.log('В вашей стране доставка не доступна');        
}




