//Obrigado que o objeto tenha um atributo do tipo especificado;
//function imprimirIdade(pessoa: {idade: number}){
//console.log(pessoa.idade);
//}
//Segue as obrigações especificadas pela interface
function imprimirIdade(pessoa) {
    console.log(pessoa.idade);
}
var joaoMarcos = { nome: 'João Marcos', idade: 31 };
imprimirIdade(joaoMarcos);
