/* Desabilita os botões de operações matemáticas quando cálculos realizados 
possuem resultados "inesperados" */

import {button_plus, button_minus, button_times, button_div,
    percentageButton, rootButton, sqrButton, simetricButton, dotButton, inverseButton
} from "./elementos.js";

export function Disable(){
    
    button_plus.disabled=true
    button_minus.disabled=true
    button_times.disabled=true
    button_div.disabled=true
    
    percentageButton.disabled=true
    rootButton.disabled=true
    sqrButton.disabled=true
    simetricButton.disabled=true
    dotButton.disabled=true
    inverseButton.disabled=true
    
    button_plus.classList.add("disabled")
    button_minus.classList.add("disabled")
    button_times.classList.add("disabled")
    button_div.classList.add("disabled")
    
    percentageButton.classList.add("disabled")
    rootButton.classList.add("disabled")
    sqrButton.classList.add("disabled")
    simetricButton.classList.add("disabled")
    dotButton.classList.add("disabled")
    inverseButton.classList.add("disabled")   
    
}
