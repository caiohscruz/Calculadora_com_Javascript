// tratamento do botao de igual
const equalButton = document.getElementById("equal") 

equalButton.addEventListener("click", function() {equalClick()})

function equalClick(){
    
    const visorInferiorIsResult = document.getElementById("visor2IsResult")
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const a = document.getElementById("a")
    const b = document.getElementById("b")
    const result = document.getElementById("result")
    const operador = document.getElementById("oper")
    const div0 = document.getElementById("div0")
    
    // se não houve uma divisão por zero antes
    if (div0.value!="true"){
        // se o botão "x²" foi clicado antes, mas o botão "=" não foi clicado na sequência,
        // ao clicar em qualquer operador, a expressão deve ser calculada, o sqrAux deve ser
        // resetado e o visorSuperior deve ser alterado de forma a apresentar o resultado 
        // mais o simbolo do operado
        const auxSqr = document.getElementById("auxSqr")
        
        if (auxSqr.value!=""){
            visorSuperior.value = visorSuperior.value.replace(auxSqr.value,"")
            result.value=eval(visorSuperior.value.replace(auxSqr.value,"")+b.value)
            visorSuperior.value+=auxSqr.value+"="
            visorInferior.value=result.value
            auxSqr.value=""
        }else{
            // a diferença aqui é que se apertar "=" quando o que temos no visorInferior
            // é um resultado, a calculadora simplemente deve repetir a operação anterior
            if (visorInferiorIsResult.value=="false"){
                visorSuperior.value=a.value+operador.value+visorInferior.value+"="
                b.value=visorInferior.value
                result.value=eval(
                    a.value+
                    operador.value+
                    b.value
                    )
                    visorInferior.value=result.value
                    a.value=result.value
                } else {
                    visorSuperior.value=visorInferior.value+operador.value+b.value+"="
                    result.value=eval(
                        visorInferior.value+
                        operador.value+
                        b.value
                        )
                        visorInferior.value=result.value
                        a.value=result.value
                    }
                }    
                visorInferiorIsResult.value="true"
                
                // tratamento da divisão por zero
                if(visorInferior.value=="Infinity"){
                    div0.value="true"
                    visorInferior.value="Não é possível dividir por zero"
                }    
                
            }else{
                // se houve uma divisão por zero antes, a calculadora é resetada
                visorInferiorIsResult.value="false"
                visorSuperior.value=""
                visorInferior.value = "0"
                a.value = ""
                b.value=""
                result.value=""
                operador.value=""
                div0.value="false"
            }
            
        }    
