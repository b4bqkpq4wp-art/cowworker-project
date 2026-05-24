// validation.js - Валидация формы обратной связи

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Сбрасываем предыдущие ошибки
    document.querySelectorAll('.input.is-danger, .textarea.is-danger').forEach(el => {
      el.classList.remove('is-danger');
    });
    document.querySelectorAll('.help.is-danger').forEach(el => el.remove());

    let isValid = true;
    const formData = {};

    // 1. Проверка имени (не пустое, минимум 2 слова)
    const fullname = document.getElementById('fullname');
    const fullnameValue = fullname.value.trim();
    
    if (fullnameValue === '') {
      showError(fullname, 'Введите имя');
      isValid = false;
    } else if (fullnameValue.split(' ').length < 2) {
      showError(fullname, 'Введите фамилию и имя');
      isValid = false;
    } else {
      formData.fullname = fullnameValue;
    }

    // 2. Проверка email
    const email = document.getElementById('email');
    const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue === '') {
      showError(email, 'Введите email');
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      showError(email, 'Введите корректный email');
      isValid = false;
    } else {
      formData.email = emailValue;
    }

    // 3. Проверка темы
    const subject = document.getElementById('subject');
    const subjectValue = subject.value;
    
    if (subjectValue === '') {
      showError(subject, 'Выберите тему');
      isValid = false;
    } else {
      formData.subject = subjectValue;
    }

    // 4. Проверка сообщения (необязательное)
    const message = document.getElementById('message');
    const messageValue = message.value.trim();
    formData.message = messageValue || '(не заполнено)';

    // 5. Проверка согласия
    const agreement = document.getElementById('agreement');
    if (!agreement.checked) {
      alert('Необходимо согласие на обработку персональных данных');
      isValid = false;
    }

    // Если всё корректно
    if (isValid) {
      // Добавляем временную метку
      formData.timestamp = new Date().toLocaleString();
      
      // Выводим в консоль (для ПР10)
      console.log('=== ФОРМА ОТПРАВЛЕНА ===');
      console.log('ФИО:', formData.fullname);
      console.log('Email:', formData.email);
      console.log('Тема:', formData.subject);
      console.log('Сообщение:', formData.message);
      console.log('Время:', formData.timestamp);
      console.log('========================');

      alert('Форма отправлена! Данные в консоли.');
      
      // Очищаем форму
      form.reset();
    }
  });

  // Функция показа ошибки
  function showError(input, message) {
    input.classList.add('is-danger');
    
    const help = document.createElement('p');
    help.classList.add('help', 'is-danger');
    help.textContent = message;
    
    const parent = input.parentNode.parentNode;
    parent.appendChild(help);
  }

  // Сброс ошибки при вводе
  document.querySelectorAll('.input, .textarea').forEach(input => {
    input.addEventListener('input', function() {
      this.classList.remove('is-danger');
      const parent = this.parentNode.parentNode;
      const errors = parent.querySelectorAll('.help.is-danger');
      errors.forEach(el => el.remove());
    });
  });
});