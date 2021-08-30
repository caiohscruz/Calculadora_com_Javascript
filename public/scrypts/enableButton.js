/* Como não tem como usar função de outros arquivos com javascript, criei
 um botão que não ficará disponível ao usuário cujo evento de clique habilita
 os botões de operações matemáticas, que podem ser desabilitados quando cálculos
 realizados tem resultados "inesperados" */

const enableButton = document.getElementById("enableButton") 

enableButton.addEventListener("click", function() {enableClick()})


function enableClick(action){
    
    const button_plus = document.getElementById("plus")
    const button_minus = document.getElementById("minus")
    const button_times = document.getElementById("times")
    const button_div = document.getElementById("div")
    
    const percentageButton = document.getElementById("%") 
    const rootButton = document.getElementById("root") 
    const sqrButton = document.getElementById("sqr") 
    const simetricButton = document.getElementById("simetric") 
    const dotButton = document.getElementById("dot") 
    const inverseButton = document.getElementById("inverse") 
    
    
    button_plus.disabled=false 
    button_minus.disabled=false
    button_times.disabled=false
    button_div.disabled=false
    
    percentageButton.disabled=false 
    rootButton.disabled=false 
    sqrButton.disabled=false
    simetricButton.disabled=false
    dotButton.disabled=false
    inverseButton.disabled=false

    button_plus.classList.remove("disabled")
    button_minus.classList.remove("disabled")
    button_times.classList.remove("disabled")
    button_div.classList.remove("disabled")
    
    percentageButton.classList.remove("disabled")
    rootButton.classList.remove("disabled")
    sqrButton.classList.remove("disabled")
    simetricButton.classList.remove("disabled")
    dotButton.classList.remove("disabled")
    inverseButton.classList.remove("disabled")
    
}
