/* Aqui será tratado o botão de raiz quadrada */

/* O trecho abaixo é responsável por identificar o botão de raiz e atribuis a ele um evento
de clique chamará a função correspondente */
const rootButton = document.getElementById("root") 
rootButton.addEventListener("click", function() {rootClick()})

function rootClick(){
    /* visorSuperior e visorInferior correpondem aos campos do visor da calculadora */
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    /* isResult sinaliza se o conteúdo do visorInferior é ou não resultado de
    alguma operação anterior */
    const isResult = document.getElementById("isResult")
    /* "auxCalc" será utilizado para auxiliar nas operações */
    const auxCalc = document.getElementById("auxCalc")
    /* "auxBuilderStr" será utilizado para construir a string "√(x)" */
    const auxBuilderStr = document.getElementById("auxBuilderStr")   
    /* "operacoes" guarda os simbolos dos operadores básicos. Como farei o uso da funçao "eval"
    terei eventualmente que lidar com os simbolos de multiplicação e divisão com "replace" */
    const operacoes = ["+","-","x","÷"]
    
    /* Se auxBuilderStr está vazio, é porque a última operação não foi tratar do x² ou raiz ou +/-,
    então auxBuilderStr tem que ser ser setado com "√(x)" onde x é o valor do visorInferior, e
    essa informação deve ser setada no visorSuperior */
    
    /* Se o visorSuperior estiver vazio, é porque não há operações anteriores a considerar.
    "auxCalc" guardará o valor de x² para operações futuras */
    if((visorSuperior.value=="")&&(auxBuilderStr.value=="")){
        auxBuilderStr.value="√("+visorInferior.value+")"
        visorInferior.value=Math.sqrt(eval(visorInferior.value))
        visorSuperior.value=auxBuilderStr.value
        auxCalc.value=visorInferior.value
    }else{
        /* Se o visorSuperior apresenta uma expressão terminada com um simbolo de alguma operação 
        matemática, houve operações antes, então não podemos desconsiderar o auxCalc, que nos ajuda
        ir realizando os cálculo */
        if(operacoes.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
            auxBuilderStr.value="√("+visorInferior.value+")"
            visorInferior.value=Math.sqrt(eval(visorInferior.value))
            auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1).replace("x","*").replace("÷","/")+visorInferior.value)
            visorSuperior.value+=auxBuilderStr.value
        }else{
            /* Se auxBuilderStr não está vazio, é porque a última operação foi tratar do x², então
            auxBuilderStr tem que ser ser setado com "√(auxBuilderStr)", e essa informação deve ser setada
            no visorSuperior */
            if (auxBuilderStr.value!=""){
                /* Se retirar o auxBuilderStr do visorSuperior fez ele ficar vazio, então não temos que nos
                preocupar com calculos anteriores */
                visorSuperior.value=visorSuperior.value.slice(0, - auxBuilderStr.value.length)
                auxBuilderStr.value="√("+auxBuilderStr.value+")"
                if(visorSuperior.value==""){
                    auxCalc.value=Math.sqrt(eval(visorInferior.value))
                    visorSuperior.value=auxBuilderStr.value
                    visorInferior.value=auxCalc.value
                }else{
                    /* Mas se o visorSuperior não ficou vazio, devemos tomar o cuidade de não perder 
                    valores de calculos anteriores */
                    if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="+"){
                        auxCalc.value=eval(auxCalc.value+"-"+visorInferior.value)
                    }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="-"){
                        auxCalc.value=eval(auxCalc.value+"+"+visorInferior.value)
                    }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="x"){
                        auxCalc.value=eval(auxCalc.value+"/"+visorInferior.value)
                    }else{
                        auxCalc.value=eval(auxCalc.value+"*"+visorInferior.value)
                    }
                    visorInferior.value=Math.sqrt(eval(visorInferior.value))
                    auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1).replace("x","*").replace("÷","/")+visorInferior.value)
                    visorSuperior.value+=auxBuilderStr.value
                }
                
            }
        }        
    }
    if (visorInferior.value=="NaN"){
        div0.value="true"
        visorInferior.value="Entrada inválida"
        visorInferior.classList.add("smalltext")
        document.getElementById("disableButton").click();
    }
    /* Sempre que apertamos x², no visorInferior fica o resultado de x², por isso devemos
    setar isResult como "true" independente da situação */
    isResult.value="true"
}