/* geral */
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let uf = document.querySelector('#estado');
let btnCep = document.querySelector('#btn-buscar-cep');
let listaCep = document.querySelector('#lista-cep');

rua.value = 'Domingos Jose';
cidade.value = 'Porto Alegre';
uf.value = 'RS';

/* events */
btnCep.addEventListener('click', function(e) {
    e.preventDefault();

    let urlBase = 'https://viacep.com.br/ws/';
    let parametros = uf.value + '/' + cidade.value + '/' + rua.value + '/json/';
    let callback = '?callback=popularNaoSeiMeuCep';
    
    let script = document.createElement('script');
    script.src = urlBase + parametros + callback;
    document.body.appendChild(script);
});

