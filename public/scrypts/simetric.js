// tratamento do botao +/-
const simetricButton = document.getElementById("simetric") 

simetricButton.addEventListener("click", function() {simetricClick()})

function simetricClick(){
    // o botão +/- simplesmente multiplica por -1 o valor disponível no visor 
    const visorInferior = document.getElementById("visor2")
    const IsResult = document.getElementById("IsResult")

    visorInferior.value = eval(visorInferior.value*-1)
    IsResult.value="false"
}