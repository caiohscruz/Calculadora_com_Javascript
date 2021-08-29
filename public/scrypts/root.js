// tratamento do botao de raiz
const rootButton = document.getElementById("root") 

rootButton.addEventListener("click", function() {rootClick()})

function rootClick(){
    const visorInferior = document.getElementById("visor2")
    const visorSuperior = document.getElementById("visor1")
    const visorInferiorisResult = document.getElementById("visor2isResult")
    
    if (visorInferiorisResult.value=="true"){
        visorSuperior.value+="√("+visorSuperior.value+")"
        visorInferior.value = Math.sqrt(eval(visorInferior.value))
    }
    if (visorInferiorisResult.value=="false"){
        visorSuperior.value+="√"+visorInferior.value
        visorInferior.value = Math.sqrt(eval(visorInferior.value))
        visorInferiorisResult.value="true"
        
    }
    
}