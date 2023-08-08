$(document).ready(function(){
    $('.single-item').slick({
        autoplay: false,
        dots: true,
        arrows: true,
      });
});

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
        }
    });
});