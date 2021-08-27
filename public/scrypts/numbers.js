/* Aqui é tratado o clique dos botões de numerais */

/* O trecho abaixo é responsável por identificar todos os botões de números,
para os quais atribui a classe "num", e adicionar a eles uma escula para clique
que chamará a função correspondente */  
const numButtons = document.querySelectorAll(".num") 
numButtons.forEach(button => {
    button.addEventListener("click", function() {numClick(button.getAttribute("id"))})
})

/* Importante perceber que, ao clicar num número, dois comportamentos são possíveis:

1- Concatenar o número correspondente ao botão clicado com a informação do visorInferior

2- Substituir a informação do visorInferior pelo número correspondente ao botão 

O caso 1 ocorre quando o visorInferior apresenta um valor diferente de zero e ainda quando
o valor não corresponde ao resultado de alguma operação anterior. O caso 2 trata do oposto */

function numClick(id){
    /* visorSuperior e visorInferior correpondem aos campos do visor da calculadora */
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    /* isResult sinaliza se o conteúdo do visorInferior é ou não resultado de
    alguma operação anterior */
    const IsResult = document.getElementById("IsResult")
    /* A constante abaixo se refere a um input que não ficará visível ao usuário
    que servirá para armazenar uma referência de qual foi o último botão de 
    operação clicado */
    const operador = document.getElementById("oper")
    /* "auxCalc" será utilizado para auxiliar nas operações */
    const auxCalc = document.getElementById("auxCalc")
    /* "auxSqr" guarda uma string do tipo "sqr(x)" e aqui vai indicar que anteriormente
    houve o tratamento do botão x² */
    const auxSqr = document.getElementById("auxSqr")

    /* Se a última informação do visorInferior, a mais à direita, for algo do tipo sqr(X)
    devemos alterar o valor da auxCalc para não considerar esse sqr() */
    if(auxSqr.value!=""){
        if((visorSuperior.value.replace(auxSqr.value,"")=="")||(visorSuperior.value.replace(auxSqr.value,"")=="-")){
            visorInferior.value="0"
            auxCalc.value=visorInferior.value
        }else{
            visorSuperior.value=auxCalc.value+operador.value
            visorInferior.value=auxCalc.value
        }
        auxSqr.value=""
    }
    if (visorInferior.value!="0"&&IsResult.value!="true"){
        /* CASO 1 */
        visorInferior.value+=id
    } else {
        /* CASO 2 */
        visorInferior.value=id
    }
    /* Como o valor do visor é alterado, "IsResult deve ser setado como "false" */
    IsResult.value="false"
}
    