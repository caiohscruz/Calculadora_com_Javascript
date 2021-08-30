/* Aqui serão tratados os botões das operações básicas (+,-,x,÷) */ 

import {button_plus, button_minus, button_times, button_div,
    visorSuperior, visorInferior, isResult, auxCalc, auxBuilderStr,
    operacoes, div0, operador
} from "./elementos.js";

import{Disable} from "./disableButtons.js";

button_plus.addEventListener("click", function() {sOperClick("plus")})
button_minus.addEventListener("click", function() {sOperClick("minus")})
button_times.addEventListener("click", function() {sOperClick("times")})
button_div.addEventListener("click", function() {sOperClick("div")})

function sOperClick(oper){
    
    /* A função de clique passa o "id" do botão clicado como parâmetro. Essa
    informação vai ser tratada pelo trecho abaixo, que irá atribuir a "operador"
    um valor correspondente à operação em questão */ 
    switch (oper){
        case "plus": {
            operador.value ="+";
            break;
        }
        case "minus":{
            operador.value ="-";
            break;
        }
        case "times":{
            operador.value ="x";
            break;
        }
        case "div":{
            operador.value ="÷";
            break;
        }
    }
    
    /* Se o visorSuperior está vazio é porque nenhum cálculo foi iniciado ainda então o 
    visorSuperior deve recever o valor do visorInferior mais o simbolo do operador e 
    isResult deve ser setado como "true", para que se um número for clicado na sequencia, 
    o visorInferior seja substituido por esse número, isso para replicar o comportamento da 
    calculadora que estou usando como parâmetro. Além disso atribuiremos a "auxCalc" o valor
    digitado para cálculos futuros */
    if(visorSuperior.value==""){
        visorSuperior.value=visorInferior.value+operador.value
        auxCalc.value=visorInferior.value
    }else{
        /* Se o último caracter do visorSuperior corresponder ao símbolo de uma operação e o visorInferior
        for um resultado, para replicar o comportamento da minha calculadora de referência, simplesmente 
        deve ser trocado o símbolo da operação no visorSuperior */
        if(operacoes.includes(visorSuperior.value.charAt(visorSuperior.value.length-1))){
            if(isResult.value=="true"){
                visorSuperior.value=visorSuperior.value.substring(0,visorSuperior.value.length-1)
                visorSuperior.value+=operador.value
            }else{
                /* Se o último caracter do visorSuperior corresponder ao símbolo de uma operação e o valor
                do visorInferior não for um resultado, devemos realizar a operação proposta e depois setar
                o visorSuperior com o resultar mais o simbolo do último operador clicado */
                visorSuperior.value=auxCalc.value+visorSuperior.value.charAt(visorSuperior.value.length-1)+visorInferior.value
                /* Não podemos esquecer de tratar dos simbolos da multiplicacao e da divisao */
                visorSuperior.value=visorSuperior.value.replace("÷","/")
                visorSuperior.value=visorSuperior.value.replace("x","*")
                auxCalc.value=eval(visorSuperior.value)
                /* Setando os visores */
                if((auxCalc.value!="Infinity")&&(auxCalc.value!="-Infinity")&&(auxCalc.value!="NaN")){
                    visorSuperior.value=auxCalc.value+operador.value
                    visorInferior.value=auxCalc.value
                }else{
                    visorSuperior.value=visorSuperior.value.replace("/","÷")
                    visorSuperior.value=visorSuperior.value.replace("*","x")
                    visorSuperior.value=visorSuperior.value+operador.value
                    div0.value="true"
                    Disable()
                    if ((auxCalc.value=="Infinity")||(auxCalc.value=="-Infinity")) {
                        visorInferior.value="Não é possível dividir por zero"
                        visorInferior.classList.add("smallertext")
                    } else if (auxCalc.value=="NaN"){
                        visorInferior.value="Resultado indefinido"
                        visorInferior.classList.add("smalltext")
                        
                    }
                }                    
            }
        }else{
            /* Se o visorSuperio não está vazio e não termina um símbolo de operação matemática,
            devemos estar com o quadrado ou raiz de um número no visor. Devemos então concatenar
            a informação do visor com o simbolo do operador e setar o valor da auxCalc */
            if(visorSuperior.value.replace(auxBuilderStr.value,"")==""){
                visorSuperior.value+=operador.value
                auxCalc.value=visorInferior.value
            }else{
                if(isResult.value=="true"){
                    visorSuperior.value=auxCalc.value+operador.value
                    visorInferior.value=auxCalc.value
                }else{
                    visorSuperior.value=visorInferior.value+operador.value
                    auxCalc.value=visorInferior.value
                }
            }
        }        
    }
    /* Sempre que um botão de operador for clicado devemos setar auxBuilderStr como vazio, pois essa string
    não será manipulada mais */
    auxBuilderStr.value=""
    /* Sempre que um botão de operador for clicado, o conteudo do visorInferior passará a corresponder 
    com algum resultado, então devemos setar isResult como "true" */
    isResult.value="true"
}