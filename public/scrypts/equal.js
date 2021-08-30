/* Tratamento do botão de igual */ 

/* Mapeando e atribuindo o evento de clique ao botão */
const equalButton = document.getElementById("equal") 
equalButton.addEventListener("click", function() {equalClick()})

function equalClick(){
    
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const auxCalc = document.getElementById("auxCalc")
    const operador = document.getElementById("oper")
    const multEquals = document.getElementById("multEquals")
    const operacoes = ["+","-","x","÷"]
    const div0 = document.getElementById("div0")
    
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
            document.getElementById("disableButton").click();
        }
        /* Tratamento para 0/0 */
        if(visorInferior.value=="NaN"){
            div0.value="true"
            visorInferior.value="Resultado indefinido"
            visorInferior.classList.add("smalltext")
            document.getElementById("disableButton").click();
        }
    }else{
        document.getElementById('C').click();
    }
    
}

