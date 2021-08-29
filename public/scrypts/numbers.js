/* Aqui é tratado o clique dos botões de numerais */

/* O trecho abaixo é responsável por identificar todos os botões de números,
para os quais atribui a classe "num", e adicionar a eles uma escula para clique
que chamará a função correspondente */  

/* 

const numButtons = document.querySelectorAll(".num") 
numButtons.forEach(button => {
    button.addEventListener("click", function() {numClick(button.getAttribute("id"))})
})

*/

/* Numa discussão no linkedin, comentaram que usar um forEach para isso não seria 
interessante, seria um incremento de complexidade sem benefícios, que seria melhor, 
por uma questão de desempenho, acessar elemento por elemento diretamente, em vez de 
por meio de um laço de repetição. Por isso o código acima foi comentado, e adiciono
o que segue. Resolvi acatar a sugestão deles por não ter ainda muita experiência,
espero ter propriedade para decidir essas coisa em não muito tempo */

const button_zero = document.getElementById("0")
const button_one = document.getElementById("1")
const button_two = document.getElementById("2")
const button_three = document.getElementById("3")
const button_four = document.getElementById("4")
const button_five = document.getElementById("5")
const button_six = document.getElementById("6")
const button_seven = document.getElementById("7")
const button_eight = document.getElementById("8")
const button_nine = document.getElementById("9")

button_zero.addEventListener("click", function() {numClick("0")})
button_one.addEventListener("click", function() {numClick("1")})
button_two.addEventListener("click", function() {numClick("2")})
button_three.addEventListener("click", function() {numClick("3")})
button_four.addEventListener("click", function() {numClick("4")})
button_five.addEventListener("click", function() {numClick("5")})
button_six.addEventListener("click", function() {numClick("6")})
button_seven.addEventListener("click", function() {numClick("7")})
button_eight.addEventListener("click", function() {numClick("8")})
button_nine.addEventListener("click", function() {numClick("9")})

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
    const isResult = document.getElementById("isResult")
    /* A constante abaixo se refere a um input que não ficará visível ao usuário
    que servirá para armazenar uma referência de qual foi o último botão de 
    operação clicado */
    const operador = document.getElementById("oper")
    /* "auxCalc" será utilizado para auxiliar nas operações */
    const auxCalc = document.getElementById("auxCalc")
    /* "auxSqr" guarda uma string do tipo "sqr(x)" e aqui vai indicar que anteriormente
    houve o tratamento do botão x² */
    const auxSqr = document.getElementById("auxSqr")

    if((div0.value=="true")||(visorSuperior.value.charAt(visorSuperior.value.length-1)=="=")){
        document.getElementById('C').click();
    }
    /* Se a última informação do visorInferior, a mais à direita, for algo do tipo sqr(X)
    devemos alterar o valor da auxCalc para não considerar esse sqr() */
    if(auxSqr.value!=""){
        if(visorSuperior.value.replace(auxSqr.value,"")==""){
            visorInferior.value="0"
            auxCalc.value=visorInferior.value
        }else{
            visorSuperior.value=auxCalc.value+operador.value
            visorInferior.value=auxCalc.value
        }
        auxSqr.value=""
    }
    if (visorInferior.value!="0"&&isResult.value!="true"){
        /* CASO 1 */
        visorInferior.value+=id
    } else {
        /* CASO 2 */
        visorInferior.value=id
    }
    /* Como o valor do visor é alterado, "isResult deve ser setado como "false" */
    isResult.value="false"
}
    