// tratamento do botao x²
const sqrButton = document.getElementById("sqr") 

sqrButton.addEventListener("click", function() {sqrClick()})

function sqrClick(){
    // o botão x² lanca no visorSuperior "sqr(x)", onde "x" é o valor
    // no visorInferior ao clicar no botão, e ainda troca o valor do
    // visorInferior pelo resultado de x²
    const visorInferiorIsResult = document.getElementById("visor2IsResult")
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const a = document.getElementById("a")
    const b = document.getElementById("b")
    const result = document.getElementById("result")
    const auxSqr = document.getElementById("auxSqr")   

    visorSuperior.value = visorSuperior.value.replace(auxSqr.value,"")

    if (auxSqr.value==""){
        auxSqr.value="sqr("+visorInferior.value+")"
        b.value=eval(visorInferior.value+"*"+visorInferior.value)
    }else{
        //se apertar x² um atrás do outro, no visorInferior deve ir apresentando
        //o valor de "x^[2(n+1)]" onde n é o número de vezes que se apertou o x²
        auxSqr.value="sqr("+auxSqr.value+")"
        b.value=eval(b.value+"*"+b.value)
    }
    visorSuperior.value += auxSqr.value
    visorInferior.value=b.value
    visorInferiorIsResult.value="true"
}