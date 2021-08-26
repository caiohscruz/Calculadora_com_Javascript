// tratamento do botao C
const CButton = document.getElementById("C") 

CButton.addEventListener("click", function() {CClick()})

function CClick(){
    // o botão C simplesmente apaga todo o conteúdo do visor e reseta as variáveis
    const visorInferiorIsResult = document.getElementById("visor2IsResult")
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const a = document.getElementById("a")
    const b = document.getElementById("b")
    const result = document.getElementById("result")
    const operador = document.getElementById("oper")
    const div0 = document.getElementById("div0")

    visorInferiorIsResult.value="false"
    visorSuperior.value=""
    visorInferior.value = "0"
    a.value = ""
    b.value=""
    result.value=""
    operador.value=""
    div0.value="false"

}