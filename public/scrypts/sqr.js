/* Aqui será tratado o botão x² */

/* O trecho abaixo é responsável por identificar o botão x² e atribuis a ele um evento
de clique chamará a função correspondente */
const sqrButton = document.getElementById("sqr") 
sqrButton.addEventListener("click", function() {sqrClick()})

function sqrClick(){
    /* visorSuperior e visorInferior correpondem aos campos do visor da calculadora */
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    /* isResult sinaliza se o conteúdo do visorInferior é ou não resultado de
    alguma operação anterior */
    const isResult = document.getElementById("isResult")
    /* "auxCalc" será utilizado para auxiliar nas operações */
    const auxCalc = document.getElementById("auxCalc")
    /* "auxSqr" será utilizado para construir a string "sqr(x)" */
    const auxSqr = document.getElementById("auxSqr")   
    /* "operacoes" guarda os simbolos dos operadores básicos. Como farei o uso da funçao "eval"
    terei eventualmente que lidar com os simbolos de multiplicação e divisão com "replace" */
    const operacoes = ["+","-","x","÷"]
    
    /* Se auxSqr está vazio, é porque a última operação não foi tratar do x², então
    auxSqr tem que ser ser setado com "sqr(x)" onde x é o valor do visorInferior, e
    essa informação deve ser setada no visorSuperior */
    
    /* Se o visorSuperior estiver vazio, é porque não há operações anteriores a considerar.
    "auxCalc" guardará o valor de x² para operações futuras */
    if((visorSuperior.value=="")&&(auxSqr.value=="")){
        auxSqr.value="sqr("+visorInferior.value+")"
        visorInferior.value=eval(visorInferior.value+"*"+visorInferior.value)
        visorSuperior.value=auxSqr.value
        auxCalc.value=visorInferior.value
    }else{
        /* Se o visorSuperior apresenta uma expressão terminada com um simbolo de alguma operação 
        matemática, houve operações antes, então não podemos desconsiderar o auxCalc, que nos ajuda
        ir realizando os cálculo */
        if(operacoes.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
            auxSqr.value="sqr("+visorInferior.value+")"
            visorInferior.value=eval(visorInferior.value+"*"+visorInferior.value)
            auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1)+visorInferior.value)
            visorSuperior.value+=auxSqr.value
        }else{
            /* Se auxSqr não está vazio, é porque a última operação foi tratar do x², então
            auxSqr tem que ser ser setado com "sqr(auxSqr)", e essa informação deve ser setada
            no visorSuperior */
            if (auxSqr.value!=""){
                /* Se retirar o auxSqr do visorSuperior fez ele ficar vazio, então não temos que nos
                preocupar com calculos anteriores */
                visorSuperior.value=visorSuperior.value.replace(auxSqr.value,"")
                auxSqr.value="sqr("+auxSqr.value+")"
                if(visorSuperior.value==""){
                    auxCalc.value=eval(auxCalc.value+"*"+auxCalc.value)
                    visorSuperior.value=auxSqr.value
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
                    visorInferior.value=eval(visorInferior.value+"*"+visorInferior.value)
                    auxCalc.value=eval(auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1)+visorInferior.value)
                    visorSuperior.value+=auxSqr.value
                }
                
            }
        }        
    }
    /* Sempre que apertamos x², no visorInferior fica o resultado de x², por isso devemos
    setar isResult como "true" independente da situação */
    isResult.value="true"
}
