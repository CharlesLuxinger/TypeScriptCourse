var quantidade = 20;
// quantidade = 'texto'; -não compila pois o Typescript inferiu o tipo
var x = [1, 2, null];
//x[3] = true; -não compila pois o Typescript inferiu o tipo
//Contextual Typing -- Inferir o tipo esperado no retorno na variavel de entrada da função.
window.onmousedown = function (evento) {
    console.log(evento.button);
};
