/* Tratamento do botao CE */ 

/* Mapeando o botão e lhe atribuindo evento de clique */
const CEButton = document.getElementById("CE") 
CEButton.addEventListener("click", function() {CEClick()})

/* O comportamento usual do CE é limpar o visorInferior */
function CEClick(){
    
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const auxBuilderStr = document.getElementById("auxBuilderStr")
    const div0 = document.getElementById("div0")
    const isResult = document.getElementById("isResult")
    const auxCalc = document.getElementById("auxCalc")
    const operacoes = ["+","-","x","÷"]
    
    /* Mas, caso a informação na parte superior do visor termine com "=", ou 
    tenha havido divisão por zero ou raiz quadrada de negativo antes, o botão CE 
    deve resetar a calculadora */
    if((visorSuperior.value.charAt(visorSuperior.value.length-1)=="=")||(div0.value=="true")){
        visorSuperior.value=""
        
        document.getElementById('C').click()
        
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
