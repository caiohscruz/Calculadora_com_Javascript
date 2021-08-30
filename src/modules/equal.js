/* Tratamento do botão de igual */ 

import {visorSuperior, visorInferior, auxCalc,
    operacoes, div0, operador, equalButton, CButton
} from "./elementos.js";

import {Disable} from "./DisableButtons.js"

/* Atribuindo o evento de clique ao botão */
equalButton.addEventListener("click", function() {equalClick()})

function equalClick(){
    
    if(visorInferior.value!="Não é possível dividir por zero"){
        if(visorSuperior.value.charAt(visorSuperior.value.length-1)!="="){
            if(operacoes.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
                if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="x"){
                    auxCalc.value=eval(visorSuperior.value.replace("x","*")+visorInferior.value)
                }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="÷"){
                    auxCalc.value=eval(visorSuperior.value.replace("÷","/")+visorInferior.value)
                }else{
                    auxCalc.value=eval(auxCalc.value+operador.value+visorInferior.value)
                } 
                visorSuperior.value+=visorInferior.value+"="
                multEquals.value=visorInferior.value
                visorInferior.value=auxCalc.value   
            }else if(visorSuperior.value==""){
                visorSuperior.value=visorInferior.value+"="
                auxCalc.value=visorInferior.value
            }else{
                visorSuperior.value+="="
                multEquals.value=visorInferior.value
                visorInferior.value=auxCalc.value
            }
        }else{
            visorSuperior.value=auxCalc.value+operador.value+multEquals.value+"="
            auxCalc.value=eval(auxCalc.value+operador.value+multEquals.value)
            visorInferior.value=auxCalc.value
        }
        /* Tratamento para divisão por zero - (x/0, onde x ≠ 0) */
        if((visorInferior.value=="Infinity")||(visorInferior.value=="-Infinity")){
            div0.value="true"
            visorInferior.value="Não é possível dividir por zero"
            visorInferior.classList.add("smallertext")
            Disable();
        }
        /* Tratamento para 0/0 */
        if(visorInferior.value=="NaN"){
            div0.value="true"
            visorInferior.value="Resultado indefinido"
            visorInferior.classList.add("smalltext")
            Disable();
        }
    }else{
        CButton.click();
    }
    
}

