/* Tratamento para o botão 1/x */

/* Mapeando o botão e lhe atribuindo evento de clique */
const inverseButton = document.getElementById("inverse") 
inverseButton.addEventListener("click", function() {inverseClick()})

function inverseClick(){
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const isResult = document.getElementById("isResult")
    const auxCalc = document.getElementById("auxCalc")
    const auxBuilderStr = document.getElementById("auxBuilderStr")   
    const operacoes = ["+","-","x","÷"]
    
    /* Se auxBuilderStr está vazio, é porque a última operação não foi tratar do
    x², raiz quadrada ou +/-, então auxBuilderStr tem que ser ser setado com 
    "1/(x)" onde x é o valor do visorInferior, e essa informação deve ser setada 
    no visorSuperior */
    
    /* Se o visorSuperior estiver vazio, é porque não há operações anteriores a
    considerar. "auxCalc" guardará o valor de da operação 1/x para operações
    futuras */
    if((visorSuperior.value=="")&&(auxBuilderStr.value=="")){
        auxBuilderStr.value=`1/(${visorInferior.value})`
        visorInferior.value=eval(auxBuilderStr.value)
        visorSuperior.value=auxBuilderStr.value
        auxCalc.value=visorInferior.value
    }else{
        /* Se o visorSuperior apresenta uma expressão terminada com um simbolo de
        alguma operação matemática, quer dizer que houve operações antes, então 
        não podemos desconsiderar o auxCalc, que nos ajuda ir realizando os cálculo */
        if(operacoes.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
            auxBuilderStr.value=`1/(${visorInferior.value})`
            visorInferior.value=eval(auxBuilderStr.value)
            auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1).replace("x","*").replace("÷","/")+visorInferior.value)
            visorSuperior.value+=auxBuilderStr.value
        }else{
            /* Se auxBuilderStr não está vazio, auxBuilderStr tem que ser ser setado com 
            "1/(auxBuilderStr)", e essa informação deve ser setada no visorSuperior */
            if (auxBuilderStr.value!=""){
                /* Se retirar o auxBuilderStr do visorSuperior fez ele ficar vazio, então não 
                temos que nos preocupar com calculos anteriores */
                visorSuperior.value=visorSuperior.value.slice(0, - auxBuilderStr.value.length)
                auxBuilderStr.value=`1/(${auxBuilderStr.value})`
                if(visorSuperior.value==""){
                    auxCalc.value=eval(`1/(${auxCalc.value})`)
                    visorSuperior.value=auxBuilderStr.value
                    visorInferior.value=auxCalc.value
                }else{
                    /* Mas se o visorSuperior não ficou vazio, devemos tomar o cuidade de não perder 
                    valores de calculos anteriores */
                    if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="+"){
                        auxCalc.value=eval(`${auxCalc.value}-(${visorInferior.value})`)
                    }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="-"){
                        auxCalc.value=eval(`${auxCalc.value}+${visorInferior.value}`)
                    }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="x"){
                        auxCalc.value=eval(`${auxCalc.value}/(${visorInferior.value})`)
                    }else{
                        auxCalc.value=eval(`${auxCalc.value}*(${visorInferior.value})`)
                    }
                    visorInferior.value=eval(`1/(${visorInferior.value})`)
                    auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1).replace("x","*").replace("÷","/")+visorInferior.value)
                    visorSuperior.value+=auxBuilderStr.value
                }
                
            }
        }        
    }
    if((visorInferior.value=="Infinity")||(visorInferior.value=="-Infinity")){
        div0.value="true"
        visorInferior.value="Não é possível dividir por zero"
        visorInferior.classList.add("smallertext")
        document.getElementById("disableButton").click()
    }
    isResult.value="true"
}
