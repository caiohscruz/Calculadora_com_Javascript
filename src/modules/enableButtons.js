/* Habilita os botões de operações matemáticas, que podem ser desabilitados quando cálculos
 realizados tem resultados "inesperados" */

import {button_plus, button_minus, button_times, button_div,
    percentageButton, rootButton, sqrButton, simetricButton, dotButton, inverseButton
} from "./elementos.js";

export function Enable(){
    
    button_plus.disabled=false 
    button_minus.disabled=false
    button_times.disabled=false
    button_div.disabled=false
    
    percentageButton.disabled=false 
    rootButton.disabled=false 
    sqrButton.disabled=false
    simetricButton.disabled=false
    dotButton.disabled=false
    inverseButton.disabled=false

    button_plus.classList.remove("disabled")
    button_minus.classList.remove("disabled")
    button_times.classList.remove("disabled")
    button_div.classList.remove("disabled")
    
    percentageButton.classList.remove("disabled")
    rootButton.classList.remove("disabled")
    sqrButton.classList.remove("disabled")
    simetricButton.classList.remove("disabled")
    dotButton.classList.remove("disabled")
    inverseButton.classList.remove("disabled")
    
}

