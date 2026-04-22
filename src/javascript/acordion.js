const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const body = pergunta.querySelector('.pergunta-body');
        body.classList.toggle('active')
    })
})