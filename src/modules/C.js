/* Aqui temos o tratamento do botão C */

import {CButton,visorInferior, visorSuperior, isResult,
auxBuilderStr, auxCalc, operador, div0, multEquals
} from "./elementos.js";

import {Enable} from "./enableButtons.js"

CButton.addEventListener("click", function() {CClick()})

/* O botão C simplesmente reseta a calculadora. E caso tenha havido antes
algum evento que desabilita botões, como divisão por zero ou raiz quadrada
de negativos, este botão deve também habilitar novamente os botões e alterar
o tamanho da fonte do visorInferior */
function CClick(){
        
    if(div0.value=="true"){
        Enable();
        visorInferior.classList.remove("smalltext")
        visorInferior.classList.remove("smallertext")
    }
    
    visorSuperior.value=""
    visorInferior.value="0"
    
    auxCalc.value=""
    auxBuilderStr.value=""
    operador.value=""
    multEquals.value=""

    isResult.value="false"
    div0.value="false"
}