// tratamento do botao C
const CButton = document.getElementById("C") 

CButton.addEventListener("click", function() {CClick()})

function CClick(){
    // o botão C simplesmente apaga todo o conteúdo do visor e reseta as variáveis
    const IsResult = document.getElementById("IsResult")
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const auxCalc = document.getElementById("auxCalc")
    const auxSqr = document.getElementById("auxSqr")
    const result = document.getElementById("result")
    const operador = document.getElementById("oper")
    const div0 = document.getElementById("div0")

    IsResult.value="false"
    visorSuperior.value=""
    visorInferior.value = "0"
    auxCalc.value = ""
    auxSqr.value = ""
    result.value=""
    operador.value=""
    div0.value="false"

}