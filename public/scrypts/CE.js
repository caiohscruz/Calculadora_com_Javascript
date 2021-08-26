// tratamento do botao CE
const CEButton = document.getElementById("CE") 

CEButton.addEventListener("click", function() {CEClick()})

function CEClick(){
    // o botão CE simplesmente apaga conteúdo do visorInferior 
    const visorInferior = document.getElementById("visor2")

    visorInferior.value = "0"
}