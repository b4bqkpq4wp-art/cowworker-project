// main.js - Основной JavaScript для проекта Cowworker

document.addEventListener('DOMContentLoaded', () => {
  // Мобильное меню (бургер)
  const navbarBurgers = document.querySelectorAll('.navbar-burger');
  
  navbarBurgers.forEach(burger => {
    burger.addEventListener('click', () => {
      const target = burger.dataset.target;
      const navbarMenu = document.getElementById(target);
      
      burger.classList.toggle('is-active');
      navbarMenu.classList.toggle('is-active');
    });
  });

  // Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Логирование для ПР9
  console.log('🏢 Cowworker — проект загружен');
  console.log('Страница:', window.location.pathname);
  console.log('Время загрузки:', new Date().toLocaleString());
});