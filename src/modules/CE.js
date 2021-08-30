/* Tratamento do botao CE */ 

import {CEButton, visorInferior, visorSuperior, isResult,
    auxBuilderStr, auxCalc, div0, operacoes, CButton
} from "./elementos.js";

CEButton.addEventListener("click", function() {CEClick()})

/* O comportamento usual do CE é limpar o visorInferior */
function CEClick(){
        
    /* Mas, caso a informação na parte superior do visor termine com "=", ou 
    tenha havido divisão por zero ou raiz quadrada de negativo antes, o botão CE 
    deve resetar a calculadora */
    if((visorSuperior.value.charAt(visorSuperior.value.length-1)=="=")||(div0.value=="true")){
        visorSuperior.value=""
        
        CButton.click()
        
    }else if(auxBuilderStr!=""){
        /* Caso "auxBuilderStr" não esteja vazio, devemos ainda recalcular o "auxCalc" */

        visorSuperior.value=visorSuperior.value.replace(auxBuilderStr.value, "")
        
        if(operacoes.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
            if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="+"){
                auxCalc.value=eval(auxCalc.value+"-"+visorInferior.value)
            }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="-"){
                auxCalc.value=eval(auxCalc.value+"+"+visorInferior.value)
            }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="x"){
                auxCalc.value=eval(auxCalc.value+"/"+visorInferior.value)
            }else{
                auxCalc.value=eval(auxCalc.value+"*"+visorInferior.value)
            }   
            auxBuilderStr.value=""         
        }
    }    
    visorInferior.value = "0"
    isResult.value="false"
    
}
