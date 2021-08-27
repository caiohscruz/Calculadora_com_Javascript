// tratamento do botao CE
const CEButton = document.getElementById("CE") 

CEButton.addEventListener("click", function() {CEClick()})

function CEClick(){
    // o botão CE simplesmente apaga conteúdo do visorInferior 
    const IsResult = document.getElementById("IsResult")
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const auxCalc = document.getElementById("auxCalc")
    const auxSqr = document.getElementById("auxSqr")
    const result = document.getElementById("result")
    const operador = document.getElementById("oper")
    const div0 = document.getElementById("div0")
    const multEquals = document.getElementById("multEquals")

    if(multEquals.value==""){
        visorInferior.value = "0"
    }else{
        IsResult.value="false"
        visorSuperior.value=""
        visorInferior.value = "0"
        auxCalc.value = ""
        auxSqr.value = ""
        result.value=""
        operador.value=""
        div0.value="false"
        multEquals.value=""
    }
}