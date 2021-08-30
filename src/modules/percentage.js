/* Tratamento do botão % */

import{percentageButton, visorSuperior, visorInferior, 
    auxCalc, auxBuilderStr, isResult

} from "./elementos.js";

percentageButton.addEventListener("click", function() {perceClick()})

function perceClick(){
    
    const plusOrMinus = ["+","-"]
    const timesOrDiv = ["x","÷"]    

    /* O botão % exibe 3 comportamentos:
    1- Caso só esteja setado um elemento para a operação, zera os visores;
    2- Caso o visor superior já apresente uma expressão ou parte dela, com operador
    de soma ou subtração, o segunto termo será calculado como sendo x% do primeiro, onde
    x é o valor no visorInferior;
    3- Caso o visor superior já apresente uma expressão ou parte dela, com operador
    de multiplicação ou divisão, o segunto termo será calculado como sendo x/100, onde
    x é o valor no visorInferior*/
    
    if(visorSuperior.value==""){
        visorSuperior.value="0"
        visorInferior.value="0"
        auxCalc.value="0"
    }else if ((auxBuilderStr.value!="")&&(visorSuperior.value.replace(auxBuilderStr.value, "")=="")){
        visorSuperior.value="0"
        visorInferior.value="0"
        auxCalc.value="0"
        auxBuilderStr.value=""
    }else if(plusOrMinus.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
        visorInferior.value=eval(`${auxCalc.value}*0.01*(${visorInferior.value})`)
        auxCalc.value=eval(`${auxCalc.value}${visorSuperior.value.charAt(visorSuperior.value.length-1)}(${visorInferior.value})`)    
        visorSuperior.value+=visorInferior.value    
    }else if(timesOrDiv.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
        visorInferior.value=eval(`0.01*${visorInferior.value}`)
        auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1).replace("÷","/").replace("x","*")+visorInferior.value)    
        visorSuperior.value+=visorInferior.value  
    }else if(auxBuilderStr.value!=""){
        visorSuperior.value=visorSuperior.value.slice(0, - auxBuilderStr.value.length)
        auxBuilderStr.value=""
        if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="+"){
            auxCalc.value=eval(`${auxCalc.value}-(${visorInferior.value})`)
        }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="-"){
            auxCalc.value=eval(`${auxCalc.value}+${visorInferior.value}`)
        }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="x"){
            auxCalc.value=eval(`${auxCalc.value}/${visorInferior.value}`)
        }else{
            auxCalc.value=eval(`${auxCalc.value}*${visorInferior.value}`)
        }
        if(plusOrMinus.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
            visorInferior.value=eval(`${auxCalc.value}*0.01*(${visorInferior.value})`)
            auxCalc.value=eval(`${auxCalc.value}${visorSuperior.value.charAt(visorSuperior.value.length-1)}(${visorInferior.value})`)    
            visorSuperior.value+=visorInferior.value    
        }else if(timesOrDiv.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
            visorInferior.value=eval(`0.01*${visorInferior.value}`)
            auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1).replace("÷","/").replace("x","*")+visorInferior.value)    
            visorSuperior.value+=visorInferior.value  
        }
    }
    isResult.value="true"
}