// main.js
const form = document.querySelector('form');

const Persistencia = {
    limpa: function() {
        localStorage.reset();
    },
    salva: function(dados) {
        localStorage['json'] = JSON.stringify(json);
    },
    carrega: function() {
        if (localStorage['json']) {
            return JSON.parse(localStorage['json']);
        }
        return [];
    }
};

const Anotacoes = {
    adiciona: function(a) {
        const anotacoes = Persistencia.carrega();
        anotacoes.push(a);
        Persistencia.salva(anotacoes);
    }
};
// SoC: Separation of Concernd (Separação de Preocupações)
form.addEventListener('submit', adicionaAnotacao);


function adicionaAnotacao(e) {
    e.preventDefault(); // impedir
    const o = {
        titulo: form.titulo.value,
        anotacao: form.anotacao.value,
    };
    Anotacoes.adiciona(o);
    renderiza();
    form.reset();
    form.titulo.focus();
}

const source = document.getElementById('tabela-template').innerHTML;
const template = Handlebars.compile(source);
const tabela = document.querySelector('div.tabela');

function renderiza() {
    const anotacoes = Persistencia.carrega();
    const html = template({anotacoes});
    tabela.innerHTML = html;
}
