/* Aqui temos o tratamento do botão C */

/* Mapeando o botão "C" e lhe atribuindo um evento de clique */
const CButton = document.getElementById("C") 
CButton.addEventListener("click", function() {CClick()})

/* O botão C simplesmente reseta a calculadora. E caso tenha havido antes
algum evento que desabilita botões, como divisão por zero ou raiz quadrada
de negativos, este botão deve também habilitar novamente os botões e alterar
o tamanho da fonte do visorInferior */
function CClick(){
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const div0 = document.getElementById("div0")
    
    if(div0.value=="true"){
        document.getElementById('enableButton').click();
        visorInferior.classList.remove("smalltext")
        visorInferior.classList.remove("smallertext")
    }
    
    visorSuperior.value=""
    visorInferior.value="0"
    
    const auxCalc = document.getElementById("auxCalc")
    const auxBuilderStr = document.getElementById("auxBuilderStr")
    const operador = document.getElementById("oper")
    const multEquals = document.getElementById("multEquals")
    
    const isResult = document.getElementById("isResult")

    auxCalc.value=""
    auxBuilderStr.value=""
    operador.value=""
    multEquals.value=""

    isResult.value="false"
    div0.value="false"
}