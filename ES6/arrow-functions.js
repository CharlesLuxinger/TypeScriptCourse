var precos = ['10', '23', '19'];
//forma tradcional
//var precosEmReais = precos.map(function (preco) {
//    return 'R$ ' + preco + ',00';
//});
//Arrow-function
var precosEmReais = precos.map(function (preco) { return 'R$ ' + preco + ',00'; });
console.log(precosEmReais);
var acimaDeVinte = precos
    .filter(function (preco) { return preco > 20; })
    .map(function (preco) { return 'R$ ' + preco + ',00'; });
console.log(acimaDeVinte);
