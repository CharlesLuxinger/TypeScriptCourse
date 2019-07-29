interface Pessoa{
    idade: number;
    sexo?: string; // ? informa que não é obrigatório
}

//Obrigado que o objeto tenha um atributo do tipo especificado;
//function imprimirIdade(pessoa: {idade: number}){
    //console.log(pessoa.idade);
//}

//Segue as obrigações especificadas pela interface
function imprimirIdade(pessoa: Pessoa){
    console.log(pessoa.idade);
}

let joaoMarcos = {nome: 'João Marcos', idade: 31};

imprimirIdade(joaoMarcos);