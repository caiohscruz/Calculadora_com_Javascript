/* Aqui serão tratados os botões das operações básicas (+,-.*,/) */ 

/* O trecho abaixo é responsável por identificar todos os botões dessas operações,
para os quais atribui a classe "simple_operation", e adicionar a eles uma escula 
para o evento de clique que chamará a função correspondente */ 
const sOperButtons = document.querySelectorAll(".simple_operation") 
sOperButtons.forEach(button => {
    button.addEventListener("click", function() {sOperClick(button.getAttribute("id"))})
})
function sOperClick(oper){
    /* A constante abaixo se refere a um input que não ficará visível ao usuário
    que servirá para armazenar uma referência de qual foi o último botão de 
    operação clicado */
    const operador = document.getElementById("oper")
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
    
    /* visorSuperior e visorInferior correpondem aos campos do visor da calculadora */
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    /* isResult sinaliza se o conteúdo do visorInferior é ou não resultado de
    alguma operação anterior */
    const IsResult = document.getElementById("IsResult")
    /* "auxCalc" será utilizado para auxiliar nas operações */
    const auxCalc = document.getElementById("auxCalc")
    /* "auxSqr" guarda uma string do tipo "sqr(x)" e aqui vai indicar que anteriormente
    houve o tratamento do botão x² */
    const auxSqr = document.getElementById("auxSqr")
    /* div0 indica se houve uma divisão por zero anteriormente  */
    const div0 = document.getElementById("div0")
    /* "operacoes" guarda os simbolos dos operadores básicos. Como farei o uso da funçao "eval"
    terei eventualmente que lidar com os simbolos de multiplicação e divisão com "replace" */
    const operacoes = ["+","-","x","÷"]
    
    
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
            if(IsResult.value=="true"){
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
                if(auxCalc.value!="Infinity"){
                    visorSuperior.value=auxCalc.value+operador.value
                    visorInferior.value=auxCalc.value
                }else{
                    visorSuperior.value=visorSuperior.value.replace("/","÷")
                    visorSuperior.value=visorSuperior.value.replace("*","x")
                    visorSuperior.value=visorSuperior.value+operador.value
                    div0.value="true"
                    visorInferior.value="Não é possível dividir por zero"
                    document.getElementById('disableOrEnableButton').click();
                }                    
            }
        }else{
            /* Se o visorSuperio não está vazio e não termina um símbolo de operação matemática,
            devemos estar com o quadrado ou raiz de um número no visor. Devemos então concatenar
            a informação do visor com o simbolo do operador e setar o valor da auxCalc */
            if((visorSuperior.value.replace(auxSqr.value,"")=="")||(visorSuperior.value.replace(auxSqr.value,"")=="-")){
                visorSuperior.value+=operador.value
                auxCalc.value=visorInferior.value
            }else{
                if(IsResult.value=="true"){
                    visorSuperior.value=auxCalc.value+operador.value
                    visorInferior.value=auxCalc.value
                }else{
                    visorSuperior.value=visorInferior.value+operador.value
                    auxCalc.value=visorInferior.value
                }
            }
        }
        
    }
    
    
    if(visorInferior.value=="Infinity"){
        div0.value="true"
        visorInferior.value="Não é possível dividir por zero"
    }
    /* Sempre que um botão de operador for clicado devemos setar auxSqr como vazio, pois essa string
    não será manipulada mais */
    auxSqr.value=""
    /* Sempre que um botão de operador for clicado, o conteudo do visorInferior passará a corresponder 
    com algum resultado, então devemos setar isResult como "true" */
    IsResult.value="true"
}