class Funcionario{
    name: string;
    salario: number;

    constructor(nome: string, salario: number){
        this.name = nome;
        this.salario = salario;
    }

    pagarImposto(taxa: number =  7.5){
        console.log(`Pagando ${this.salario * taxa / 100} de imposto`);
    }
}

class Secretario extends Funcionario{

}

class Executivo extends Funcionario{
    pagarImposto(taxa: number = 27.5){
        console.log('Executivo paga mais');
        super.pagarImposto(taxa);
    }
}

let sarah = new Secretario('Sarah', 2000);
let jorge = new Executivo('Jorge', 30000);

sarah.pagarImposto();
jorge.pagarImposto();
