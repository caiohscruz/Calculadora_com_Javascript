// tratamento das operacoes basicas

// captura os botões de operadores matemáticos
const sOperButtons = document.querySelectorAll(".simple_operation") 

// adicionando um evento de clique a esses botões
sOperButtons.forEach(button => {
    button.addEventListener("click", function() {sOperClick(button.getAttribute("id"))})
})
function sOperClick(oper){
    
    const operador = document.getElementById("oper")
    // identifica de qual operação se trata
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
            operador.value ="*";
            break;
        }
        case "div":{
            operador.value ="/";
            break;
        }
    }
    
    const visorInferiorIsResult = document.getElementById("visor2IsResult")
    const visorSuperior = document.getElementById("visor1")
    const visorInferior = document.getElementById("visor2")
    const a = document.getElementById("a")
    const b = document.getElementById("b")
    const result = document.getElementById("result")
    
    // se o botão "x²" foi clicado antes, mas o botão "=" não foi clicado na sequência,
    // ao clicar em qualquer operador, a expressão deve ser calculada, o sqrAux deve ser
    // resetado e o visorSuperior deve ser alterado de forma a apresentar o resultado 
    // mais o simbolo do operado
    const auxSqr = document.getElementById("auxSqr")
    
    if (auxSqr.value!=""){
        visorSuperior.value = visorSuperior.value.replace(auxSqr.value,"")
        result.value=eval(visorSuperior.value+b.value)
        visorSuperior.value=result.value+operador.value
        visorInferior.value=result.value
        auxSqr.value=""
    }else{    
        if(visorInferiorIsResult.value=="false"){
            //se o valor do visorInferior não é um resultado e o visor superior
            // está vazio, deve ser guardado em "a" o valor do visor inferior e
            // o conteudo do visorSuperior deve ser atualizado para "a" + operador
            if (visorSuperior.value==""){
                a.value=visorInferior.value
                visorSuperior.value=a.value+operador.value
            } else {
                // se o valor do visorInferior não for um resultado e o visorSuperior
                // não estiver vazio, o valor do visorInferior deve ser guardado em "b",
                // o resultado da operação deve ser guardado em "result", o visorSuperior
                // deve passar a apresentar o "result" + "operador", tanto o visorInferior
                // quanto o "a" devem passar a ter o valor do "result", e demos sinalizar que
                // o visorInferior passou a ser um "resultado"
                b.value=visorInferior.value
                result.value=eval(
                    "("+a.value+")"
                    +operador.value+
                    "("+b.value+")"
                    )
                    visorSuperior.value=result.value+operador.value
                    visorInferior.value=result.value
                    a.value=result.value
                }
        }else{
            // se o visorInferior é um resultado, o visor superior deve ser atualizado
            // acrescentando o operador
            visorSuperior.value=a.value+operador.value
        }
    }
        visorInferiorIsResult.value="true"        
}