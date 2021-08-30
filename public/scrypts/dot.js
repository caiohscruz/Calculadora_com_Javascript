/* Tratamento do botão de ponto */

/* Mapeando o botão e lhe atribuindo evento de clique */
const dotButton = document.getElementById("dot")
dotButton.addEventListener("click", function() {dotClick()})

/* Importante notar que um número não pode ter mais que um ponto, e que
o visorInferior deve ser resetado caso contenha um "resultado", esse
comportamento não é exclusivo para o botão de ponto */
function dotClick(){
    
    const isResult = document.getElementById("isResult")
    const visorInferior = document.getElementById("visor2")
    
    if(isResult.value=="true"){
        visorInferior.value="0"
        isResult.value="false"
    }
    if(!visorInferior.value.includes(".")){
        visorInferior.value+="."
    }    
}