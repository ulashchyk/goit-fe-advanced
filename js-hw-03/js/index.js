'use strict'
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  const result = login.length >= 4 && login.length <= 16;
  return result
};

const isLoginUnique = function (allLogins, login) {
  const result = allLogins.includes(login);
  return result;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) !== true) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов')
  } else if (isLoginUnique(allLogins, login) === true) {
    console.log('Такой логин уже используется!')
  } else {
    allLogins.push(login)
    console.log('Логин успешно добавлен!');
  }
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'