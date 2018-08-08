// main.js
// JavaScript Object Notation (JSON)
// declaração do Json
const p = {
    preco: 6.5,
    descricao: 'Coca-cola 3L'
};
// pode-se ler e alterar propriedades de dois modos:
console.log(p.descricao);
console.log(p['descricao']);

// é possível adicionar propriedades
p.validade = '10-2019';

const a = {
    nome: 'Thiago Costa',
    alias: 'Farofa'
};
// vem tudo
console.log(Object.keys(p));

// retorna 'Coca-cola-3l

console.log(p[Object.keys(p)[1]]);
console.dir(a);
