/* Como não tem como usar função de outros arquivos com javascript, criei um botão que não ficará disponível ao usuário */

const disableButton = document.getElementById("disableButton") 

disableButton.addEventListener("click", function() {DisableClick()})


function DisableClick(action){
    /*
    const simpleButtons = document.querySelectorAll(".simple_operation") 
    const diffButtons = document.querySelectorAll(".different_operation") 
    
    simpleButtons.forEach(simpleButton => {
        if(simpleButton.disabled==true){
            simpleButton.disabled=false
        }else{
            simpleButton.disabled=true
        }
    })
    diffButtons.forEach(diffButton => {
        if(diffButton.disabled==true){
            diffButton.disabled=false
        }else{
            diffButton.disabled=true
        }
    })
    */
    /* Numa discussão no linkedin, comentaram que usar um forEach para isso não seria 
    interessante, seria um incremento de complexidade sem benefícios, que seria melhor, 
    por uma questão de desempenho, acessar elemento por elemento diretamente, em vez de 
    por meio de um laço de repetição. Por isso o código acima foi comentado, e adiciono
    o que segue. Resolvi acatar a sugestão deles por não ter ainda muita experiência,
    espero ter propriedade para decidir essas coisa em não muito tempo */
    
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

        button_plus.disabled=true
        button_minus.disabled=true
        button_times.disabled=true
        button_div.disabled=true
        
        percentageButton.disabled=true
        rootButton.disabled=true
        sqrButton.disabled=true
        simetricButton.disabled=true
        dotButton.disabled=true
        inverseButton.disabled=true

        button_plus.classList.add("disabled")
        button_minus.classList.add("disabled")
        button_times.classList.add("disabled")
        button_div.classList.add("disabled")
        
        percentageButton.classList.add("disabled")
        rootButton.classList.add("disabled")
        sqrButton.classList.add("disabled")
        simetricButton.classList.add("disabled")
        dotButton.classList.add("disabled")
        inverseButton.classList.add("disabled")
    
       
}
