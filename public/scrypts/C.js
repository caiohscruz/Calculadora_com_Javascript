/* Aqui temos o tratamento do botão C */
const CButton = document.getElementById("C") 

CButton.addEventListener("click", function() {CClick()})

function CClick(){
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const div0 = document.getElementById("div0")
    
    /* O botão C simplesmente reseta a calculadora */
    if(div0.value=="true"){
        document.getElementById('enableButton').click();
    }
    
    visorSuperior.value=""
    visorInferior.value=""
    /*
    const stringInputs = document.querySelectorAll(".auxString") 
    stringInputs.forEach(stringInput => stringInput.value="")
    const boolInputs = document.querySelectorAll(".auxBooleano") 
    boolInputs.forEach(boolInput => boolInput.value="false")
    */
    /* Numa discussão no linkedin, comentaram que usar um forEach para isso não seria 
    interessante, seria um incremento de complexidade sem benefícios, que seria melhor, 
    por uma questão de desempenho, acessar elemento por elemento diretamente, em vez de 
    por meio de um laço de repetição. Por isso o código acima foi comentado, e adiciono
    o que segue. Resolvi acatar a sugestão deles por não ter ainda muita experiência,
    espero ter propriedade para decidir essas coisa em não muito tempo */
    const auxCalc = document.getElementById("auxCalc")
    const auxBuilderStr = document.getElementById("auxBuilderStr")
    const operador = document.getElementById("oper")
    const multEquals = document.getElementById("multEquals")
    
    const isResult = document.getElementById("isResult")

    auxCalc.value=""
    auxBuilderStr.value=""
    operador.value=""
    multEquals.value=""

    isResult.value="false"
    div0.value="false"

}