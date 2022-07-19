window.addEventListener('DOMContentLoaded', () => {

    const faq = document.querySelector('.faq-container'),
          faqs = faq.querySelectorAll('.faq'),
          buttons = faq.querySelectorAll('.faq-toggle');


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.classList.toggle('active');
        });
    });
});