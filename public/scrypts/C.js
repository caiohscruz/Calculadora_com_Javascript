/* Aqui temos o tratamento do botão C */
const CButton = document.getElementById("C") 

CButton.addEventListener("click", function() {CClick()})

function CClick(){
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    
    /* O botão C simplesmente reseta a calculadora */
    if(div0.value=="true"){
        document.getElementById('disableOrEnableButton').click();
    }
    
    visorSuperior.value=""
    visorInferior.value=""
        
    const stringInputs = document.querySelectorAll(".auxString") 
    stringInputs.forEach(stringInput => stringInput.value="")
    const boolInputs = document.querySelectorAll(".auxBooleano") 
    boolInputs.forEach(boolInput => boolInput.value="false")

    
}