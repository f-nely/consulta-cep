/* geral */
let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');

cep.value = '01001000';

/* events */
cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = `https://viacep.com.br/ws/${cep}/json/?callback=popularForm`;
    document.body.appendChild(script);
});


