/* Aqui será tratado o botão x² */

import { sqrButton, visorInferior, visorSuperior, 
    isResult, auxBuilderStr, auxCalc, operacoes
} from "./elementos.js"

sqrButton.addEventListener("click", function() {sqrClick()})

function sqrClick(){
        
    /* Se auxBuilderStr está vazio, é porque a última operação não foi tratar do x² ou raiz
    ou +/- ou 1/x, então auxBuilderStr tem que ser ser setado com "sqr(x)" onde x é o valor
    do visorInferior, e essa informação deve ser setada no visorSuperior */
    
    /* Se o visorSuperior estiver vazio, é porque não há operações anteriores a considerar.
    "auxCalc" guardará o valor de x² para operações futuras */
    if((visorSuperior.value=="")&&(auxBuilderStr.value=="")){
        auxBuilderStr.value=`sqr(${visorInferior.value})`
        visorInferior.value=eval(`${visorInferior.value}*(${visorInferior.value})`)
        visorSuperior.value=auxBuilderStr.value
        auxCalc.value=visorInferior.value
    }else{
        /* Se o visorSuperior apresenta uma expressão terminada com um simbolo de alguma operação 
        matemática, houve operações antes, então não podemos desconsiderar o auxCalc, que nos ajuda
        ir realizando os cálculo */
        if(operacoes.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
            auxBuilderStr.value=`sqr(${visorInferior.value})`
            visorInferior.value=eval(`${visorInferior.value}*(${visorInferior.value})`)
            auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1).replace("x","*").replace("÷","/")+visorInferior.value)
            visorSuperior.value+=auxBuilderStr.value
        }else{
            /* Se auxBuilderStr não está vazio, é porque a última operação foi tratar do x², então
            auxBuilderStr tem que ser ser setado com "sqr(auxBuilderStr)", e essa informação deve ser setada
            no visorSuperior */
            if (auxBuilderStr.value!=""){
                /* Se retirar o auxBuilderStr do visorSuperior fez ele ficar vazio, então não temos que nos
                preocupar com calculos anteriores */
                visorSuperior.value=visorSuperior.value.slice(0, - auxBuilderStr.value.length)
                auxBuilderStr.value=`sqr(${auxBuilderStr.value})`
                if(visorSuperior.value==""){
                    auxCalc.value=eval(`${auxCalc.value}*(${auxCalc.value})`)
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
                    visorInferior.value=eval(`${visorInferior.value}*(${visorInferior.value})`)
                    auxCalc.value=eval(`${auxCalc.value}${visorSuperior.value.charAt(visorSuperior.value.length-1).replace("x","*").replace("÷","/")}(${visorInferior.value})`)
                    visorSuperior.value+=auxBuilderStr.value
                }
                
            }
        }        
    }
    /* Sempre que apertamos x², no visorInferior fica o resultado de x², por isso devemos
    setar isResult como "true" independente da situação */
    isResult.value="true"
}
