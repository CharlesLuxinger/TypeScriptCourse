var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Meu nome \u00E9: " + this.nome + " e tenho " + this.idade + " anos";
    };
    return Cliente;
}());
var joao = new Cliente('Charles', 31);
console.log(joao.apresentar);
