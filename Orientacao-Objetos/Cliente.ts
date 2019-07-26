class Cliente{
    nome : string;
    idade : number;

    constructor(nome : string, idade : number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Meu nome é: ${this.nome} e tenho ${this.idade} anos`;
    }
}

let joao : Cliente = new Cliente('Charles', 31);

console.log(joao.apresentar);