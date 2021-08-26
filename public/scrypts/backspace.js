// tratamento do botao de backspace
const backButton = document.getElementById("backspace") 

backButton.addEventListener("click", function() {backClick()})

function backClick(){
    // o botão do backspace simplesmente atualizado o visorInferior com o
    // valor anterior menos o último dígito informado. Se não houver mais dígitos
    // para remover, o visor apresenta o valor "zero", que é o valor defaut do input
    const visorInferior = document.getElementById("visor2")

    visorInferior.value = visorInferior.value.substring(0, visorInferior.value.length -1)
}