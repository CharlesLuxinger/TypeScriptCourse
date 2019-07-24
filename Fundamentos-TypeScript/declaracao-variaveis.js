//diference between var, let e const
// var
function iniciarTime(iniciaJogo) {
    var nome = 'Serra';
    if (iniciaJogo) {
        var cidade = 'Vitória';
    }
    //Var permite enxergar a varíavel fora do escopo(HOISTING)
    console.log(nome + " ir\u00E1 jogar em " + cidade);
}
iniciarTime(true);
// Let - Tipo Indefinido é necessário declarar o tipo
function iniciarTime2(iniciaJogo) {
    var nome = 'Serra';
    var cidade = 'Vila Velha';
    if (iniciaJogo) {
        cidade = 'Vitória';
    }
    //Let não permite enxergar a varíavel fora do escopo
    console.log(nome + " ir\u00E1 jogar em " + cidade);
}
iniciarTime2(true);
// Const(Constante) - Tipo Indefinido é necessário declarar o tipo
function iniciarTime3(iniciaJogo) {
    var nome = 'Serra';
    var cidade = 'Vila Velha';
    //if (iniciaJogo){
    //  cidade = 'Vitória'
    //}
    //Const não permite enxergar a varíavel fora do escopo
    console.log(nome + " ir\u00E1 jogar em " + cidade);
}
iniciarTime3(true);
