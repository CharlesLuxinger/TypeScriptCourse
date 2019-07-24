// boolean
let estaPago : boolean = true;

// number
let idade : number = 20;
let valor : number = 29.99;

//string 
let nome: string = 'Charles';

//Template Strings;
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`)
//==
console.log('Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos')

// arrays(Quaquer tipo)
let notas: number[] = [8,7,9];

//Tuple
let idadeAluno:[number, string] = [20, 'Charles']
console.log('Olá, meu nome é ' + idadeAluno[1] + ' e tenho ' + idadeAluno[1] + ' anos')

//Enum
enum Status {Ativo, Processando, Cancelado};

let statusProcesso : Status = Status.Ativo;

//Any(Indefinido) - Criar arrays com tipos de dados diferentes
let qualquerValor: any = 4;
qualquerValor =  'Texto';
qualquerValor = true;

// void - sem tipo
function alerta(): void{

};