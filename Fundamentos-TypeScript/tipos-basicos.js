// boolean
var estaPago = true;
// number
var idade = 20;
var valor = 29.99;
//string 
var nome = 'Charles';
//Template Strings;
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
//==
console.log('Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos');
// arrays(Quaquer tipo)
var notas = [8, 7, 9];
//Tuple
var idadeAluno = [20, 'Charles'];
console.log('Olá, meu nome é ' + idadeAluno[1] + ' e tenho ' + idadeAluno[1] + ' anos');
//Enum
var Status;
(function (Status) {
    Status[Status["Ativo"] = 0] = "Ativo";
    Status[Status["Processando"] = 1] = "Processando";
    Status[Status["Cancelado"] = 2] = "Cancelado";
})(Status || (Status = {}));
;
var statusProcesso = Status.Ativo;
//Any(Indefinido) - Criar arrays com tipos de dados diferentes
var qualquerValor = 4;
qualquerValor = 'Texto';
qualquerValor = true;
// void - sem tipo
function alerta() {
}
;
