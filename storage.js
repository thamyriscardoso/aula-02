sessionStorage.setItem('username', 'profmarcio');
console.log(sessionStorage.getItem('username')); // profmarcio
sessionStorage['idade'] = 41;
console.log(sessionStorage['idade']); // "41" STRING!!!
// sessionStorage e localStorage só armazenam string
const obj = {nome: 'digaum', senha: 'polenta123$'};
const str = JSON.stringify(obj);
const obj2 = JSON.parse(str);
sessionStorage[usuario] = JSON.stringify(obj);
const volta = JSON.parse(sessionStorage['usuario']);
