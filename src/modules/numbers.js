/* Aqui é tratado o clique dos botões de numerais */

import {button_zero, button_one, button_two, button_three, button_four,
    button_five, button_six, button_seven, button_eight, button_nine,
    visorSuperior, visorInferior, isResult, auxCalc, auxBuilderStr}
    from "./elementos.js";

button_zero.addEventListener("click", function() {numClick("0")})
button_one.addEventListener("click", function() {numClick("1")})
button_two.addEventListener("click", function() {numClick("2")})
button_three.addEventListener("click", function() {numClick("3")})
button_four.addEventListener("click", function() {numClick("4")})
button_five.addEventListener("click", function() {numClick("5")})
button_six.addEventListener("click", function() {numClick("6")})
button_seven.addEventListener("click", function() {numClick("7")})
button_eight.addEventListener("click", function() {numClick("8")})
button_nine.addEventListener("click", function() {numClick("9")})

/* Importante perceber que, ao clicar num número, três comportamentos são possíveis:
1- Concatenar o número correspondente ao botão clicado com a informação do visorInferior
2- Substituir a informação do visorInferior pelo número correspondente ao botão 
3- O mesmo de 2, mas também alterando a informação do visorSuperior e recalculando o auxCalc

O caso 1 ocorre quando o visorInferior apresenta um valor diferente de zero e ainda quando
o valor não corresponde ao resultado de alguma operação anterior. O caso 2 é desencadeado
quando o visorInferior é um resultado. O caso 3 é desencadeado quando o visorInferior é um
resultado de alguma das operações que manipulam o auxBuilderStr (x², raiz, 1/x e +/-) */

function numClick(id){

    if((div0.value=="true")||(visorSuperior.value.charAt(visorSuperior.value.length-1)=="=")){
        document.getElementById('C').click()
    }
    /* Caso 3 */
    if(auxBuilderStr.value!=""){
        if(visorSuperior.value.replace(auxBuilderStr.value,"")==""){
            visorInferior.value="0"
            auxCalc.value=visorInferior.value
        }else{
            visorSuperior.value=visorSuperior.value.slice(0, - auxBuilderStr.value.length)
            if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="+"){
                auxCalc.value=eval(`${auxCalc.value}-(${visorInferior.value})`)
            }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="-"){
                auxCalc.value=eval(`${auxCalc.value}+(${visorInferior.value})`)
            }else if(visorSuperior.value.charAt(visorSuperior.value.length-1)=="x"){
                auxCalc.value=eval(`${auxCalc.value}/(${visorInferior.value})`)
            }else{
                auxCalc.value=eval(`${auxCalc.value}*(${visorInferior.value})`)
            }
            visorInferior.value="0"
        }
        auxBuilderStr.value=""
    }
    if (visorInferior.value!="0"&&isResult.value!="true"){
        /* CASO 1 */
        visorInferior.value+=id
    } else {
        /* CASO 2 */
        visorInferior.value=id
    }
    isResult.value="false"
}
    