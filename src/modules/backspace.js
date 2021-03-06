/* Tratamento do botao de backspace */ 

import {backButton, visorInferior, CButton} from "./elementos.js"

backButton.addEventListener("click", function() {backClick()})

/* O botão do backspace apaga o dígito mais à direita do visorInferior. Se 
não houver mais dígitos para remover, o visor apresenta o valor "zero", que
é o valor defaut do visorInferior. Caso tenha havido uma divisão por zero,
resultando em "infinito" ou "indefinido", ou ainda uma raiz quadrada de 
negativo, clicar em "backspace" deverá resetar a calculadora */ 
function backClick(){

    visorInferior.value = visorInferior.value.substring(0, visorInferior.value.length -1)

    if(visorInferior.value.length==0){
        visorInferior.value="0"
    }

    if(div0.value=="true"){
        CButton.click()
    }
}
