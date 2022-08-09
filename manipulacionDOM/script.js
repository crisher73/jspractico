const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
h1.innerHTML = 'Cristina,<br> la más bonita';
h1.innerText = 'Cristina,<br> la más bonita';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class','rojo');  // asi se pueden modificar los atributos de los elementos en HTML. 

h1.classList.add('rojo');
h1.classList.remove('verde');