/* Tratamento do botao CE */ 
const CEButton = document.getElementById("CE") 

CEButton.addEventListener("click", function() {CEClick()})

function CEClick(){
    
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const auxBuilderStr = document.getElementById("auxBuilderStr")
    const div0 = document.getElementById("div0")
    const isResult = document.getElementById("isResult")
    const auxCalc = document.getElementById("auxCalc")
    const operacoes = ["+","-","x","÷"]
    
        if((visorSuperior.value.charAt(visorSuperior.value.length-1)=="=")||(div0.value=="true")){
            visorSuperior.value=""
            
            /* Caso a informação na parte superior do visor termine com "=", o botão C 
            se comporta como o CE, resetando a calculadora */
            document.getElementById('C').click();
            
        }else if(auxBuilderStr!=""){
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
        /* O comportamento usual do CE é limpar a parte inferior do visor */
        visorInferior.value = "0"
        isResult.value="false"
    
}
