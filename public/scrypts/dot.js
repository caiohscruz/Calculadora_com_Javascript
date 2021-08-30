const dotButton = document.getElementById("dot")

dotButton.addEventListener("click", function() {dotClick()})

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