/* Tratamento do botão de ponto */

import {dotButton, isResult, visorInferior} from "./elementos.js";

dotButton.addEventListener("click", function() {dotClick()})

/* Importante notar que um número não pode ter mais que um ponto, e que
o visorInferior deve ser resetado caso contenha um "resultado", esse
comportamento não é exclusivo para o botão de ponto */
function dotClick(){
        
    if(isResult.value=="true"){
        visorInferior.value="0"
        isResult.value="false"
    }
    if(!visorInferior.value.includes(".")){
        visorInferior.value+="."
    }    
}