// Declarations
const language_switch = document.querySelector('.language-switch');
//     title = document.querySelector('pg-title'),
//     text = document.querySelector('pg-desc'),
//     subtitle = document.querySelector('pg-subtitle');

// language_switch.addEventListener('click', () => {
//     language_switch.classList.toggle('active');
//     let lang = language_switch.getAttribute('language');

//     title.textContent = data[lang].title
//     text.textContent = data[lang].text
//     subtitle.textContent = data[lang].subtitle
// });


// let data = {
//     portugues: {
//         title: 'Desenvolvimento Web como você nunca viu!',
//         text: 'Olá! Sou Oliver Benites, desenvolvedor Full-Stack em treinamento, já com conhecimentos em HTML, CSS, JavaScript e SQL. Estou aberto para comissões, colaborações, vaga júnior e voluntariado. Vamos conversar?',
//         subtitle: 'Acesse minhas redes:'
//     },
//     english: {
//         title: "Web Development in a way you have never seen!",
//         text: "Hi! I'm Oliver Benites, Full-Stack developer in training, but I already have skill in HTML, CSS, JavaScript and SQL. I'm open for commissions, to collaborate, junior opportunities and volunteering. Let's talk?",
//         subtitle: 'Where to find me:'
//     }
// };


language_switch.addEventListener('click', () => language_switch.classList.toggle('active'))