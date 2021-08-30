/* Tratamento do botao +/- */

/* Mapeando o botão e lhe atribuindo evento de clique */
const simetricButton = document.getElementById("simetric") 
simetricButton.addEventListener("click", function() {simetricClick()})

function simetricClick(){
    /* O botão +/- simplesmente multiplica por -1 o valor disponível no visorInferior.
    No entanto, caso esse número seja resultado de alguma das operações que utilizam 
    o auxBuilderStr, deve setar no visor superior negate(auxBuilderStr) */  
    const visorInferior = document.getElementById("visor2")
    const visorSuperior = document.getElementById("visor1")
    const auxCalc = document.getElementById("auxCalc")
    const isResult = document.getElementById("isResult")
    const auxBuilderStr = document.getElementById("auxBuilderStr")
    
    if (auxBuilderStr.value!=""){
        /* Se retirar o auxBuilderStr do visorSuperior fez ele ficar vazio, então não temos que nos
        preocupar com calculos anteriores */
        visorSuperior.value=visorSuperior.value.slice(0, - auxBuilderStr.value.length)
        auxBuilderStr.value=`negate(${auxBuilderStr.value})`
        if(visorSuperior.value==""){
            auxCalc.value=eval(`${auxCalc.value}*(-1)`)
            visorSuperior.value=auxBuilderStr.value
            visorInferior.value=auxCalc.value
        }else{
            /* Mas se o visorSuperior não ficou vazio, devemos tomar o cuidade de não perder 
            valores de calculos anteriores */
            if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="+"){
                auxCalc.value=eval(`${auxCalc.value}-(${visorInferior.value})`)
            }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="-"){
                auxCalc.value=eval(`${auxCalc.value}+(${visorInferior.value})`)
            }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="x"){
                auxCalc.value=eval(`${auxCalc.value}/(${visorInferior.value})`)
            }else{
                auxCalc.value=eval(`${auxCalc.value}*(${visorInferior.value})`)
            }
            visorInferior.value=eval(`${visorInferior.value}*(-1)`)
            auxCalc.value=eval(`${auxCalc.value}${visorSuperior.value.charAt(visorSuperior.value.length-1).replace("x","*").replace("÷","/")}(${visorInferior.value})`)
            visorSuperior.value+=auxBuilderStr.value
        }
    }else{
        visorInferior.value=eval(`${visorInferior.value}*(-1)`)
    }
    isResult.value="false"
}