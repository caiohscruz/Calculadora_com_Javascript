const perceButton = document.getElementById("%") 
perceButton.addEventListener("click", function() {perceClick()})

function perceClick(){
    
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const auxBuilderStr = document.getElementById("auxBuilderStr")   
    const auxCalc = document.getElementById("auxCalc")
    const plusOrMinus = ["+","-"]
    const timesOrDiv = ["x","÷"]    
    
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
        visorInferior.value=eval(auxCalc.value+"*0.01*"+visorInferior.value)
        auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1)+"("+visorInferior.value+")")    
        visorSuperior.value+=visorInferior.value    
    }else if(timesOrDiv.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
        visorInferior.value=eval("0.01*"+visorInferior.value)
        auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1).replace("÷","/").replace("x","*")+visorInferior.value)    
        visorSuperior.value+=visorInferior.value  
    }else if(auxBuilderStr.value!=""){
        visorSuperior.value=visorSuperior.value.slice(0, - auxBuilderStr.value.length)
        auxBuilderStr.value=""
        if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="+"){
            auxCalc.value=eval(auxCalc.value+"-"+visorInferior.value)
        }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="-"){
            auxCalc.value=eval(auxCalc.value+"+"+visorInferior.value)
        }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="x"){
            auxCalc.value=eval(auxCalc.value+"/"+visorInferior.value)
        }else{
            auxCalc.value=eval(auxCalc.value+"*"+visorInferior.value)
        }
        if(plusOrMinus.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
            visorInferior.value=eval(auxCalc.value+"*0.01*"+visorInferior.value)
            auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1)+"("+visorInferior.value+")")    
            visorSuperior.value+=visorInferior.value    
        }else if(timesOrDiv.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
            visorInferior.value=eval("0.01*"+visorInferior.value)
            auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1).replace("÷","/").replace("x","*")+visorInferior.value)    
            visorSuperior.value+=visorInferior.value  
        }
    }
}