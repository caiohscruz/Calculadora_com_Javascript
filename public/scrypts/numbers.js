// tratamento dos botoes de numerais

// identificando todos os botões de números, para os quais atribui a
// classe "num"
const numButtons = document.querySelectorAll(".num") 

// adicionando um evento de clique a esses botões
numButtons.forEach(button => {
    button.addEventListener("click", function() {numClick(button.getAttribute("id"))})
})

// função que insere os números no visor
function numClick(id){
    const visorInferior = document.getElementById("visor2")
    const visorInferiorIsResult = document.getElementById("visor2IsResult")
    const visorSuperior = document.getElementById("visor1")
    
    // se o botão "x²" foi clicado antes, mas o botão "=" não foi clicado na sequência,
    // ao clicar em qualquer número, sqrAux deve ser resetado e o visorSuperior de ser
    // alterado de forma a tirar o "sqr(x)"
    const auxSqr = document.getElementById("auxSqr")

    if (auxSqr.value!=""){
        visorSuperior.value = visorSuperior.value.replace(auxSqr.value,"")
        auxSqr.value=""
    }    
    
    // caso o "visor2" contenha apenas o valor 0 ou o resultado
    // de uma operação anterior, ao clicar em algum número, o visor2
    // precisa ser atualizado para o valor do botão clicado, senão
    // o valor do visor deve ser concatenado com o valor do botão
    if (visorInferior.value=="0"||visorInferiorIsResult.value=="true"){
        visorInferior.value=id
    } else {
        visorInferior.value+=id
    }
    visorInferiorIsResult.value="false"
}