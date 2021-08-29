// tratamento do botao de raiz
const rootButton = document.getElementById("root") 

rootButton.addEventListener("click", function() {rootClick()})

function rootClick(){
    const visorInferior = document.getElementById("visor2")
    const visorSuperior = document.getElementById("visor1")
    const visorInferiorIsResult = document.getElementById("visor2IsResult")
    
    if (visorInferiorIsResult.value=="true"){
        visorSuperior.value+="√("+visorSuperior.value+")"
        visorInferior.value = Math.sqrt(eval(visorInferior.value))
    }
    if (visorInferiorIsResult.value=="false"){
        visorSuperior.value+="√"+visorInferior.value
        visorInferior.value = Math.sqrt(eval(visorInferior.value))
        visorInferiorIsResult.value="true"
        
    }
    
}