// consoleLogger.js - Вывод данных в консоль для ПР9 и ПР10

document.addEventListener('DOMContentLoaded', function() {
  // Пример вывода для ПР9
  console.log('📋 Cowworker — система логирования загружена');
  console.log('Текущая страница:', window.location.pathname);
  console.log('Дата и время:', new Date().toLocaleString());

  // Пример переменных для ПР9
  const projectName = 'Cowworker';
  const version = '1.0';
  const featuresCount = 6;
  
  console.log('Проект:', projectName);
  console.log('Версия:', version);
  console.log('Количество фильтров:', featuresCount);

  // Пример функции для ПР9
  function greetUser(userName) {
    const message = `Привет, ${userName}! Добро пожаловать в ${projectName}`;
    console.log(message);
    return message;
  }

  // Пример использования
  // greetUser('Пользователь');

  // Слушаем событие успешной отправки формы (из validation.js)
  document.addEventListener('formValid', function(event) {
    const formData = event.detail;
    
    console.clear();
    console.log('=== НОВАЯ ОТПРАВКА ФОРМЫ ===');
    console.log('ФИО:', formData.fullname);
    console.log('Телефон:', formData.phone);
    console.log('Email:', formData.email);
    console.log('Сообщение:', formData.message || '(не заполнено)');
    
    const timestamp = new Date().toLocaleString();
    console.log('Время отправки:', timestamp);
    console.log('==============================');
  });
});