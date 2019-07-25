let quantidade = 20;
// quantidade = 'texto'; -não compila pois o Typescript inferiu o tipo

let x = [1,2,null];
//x[3] = true; -não compila pois o Typescript inferiu o tipo


//Contextual Typing
window.onmousedown = function(evento){
    console.log (evento.button);
}