// tratamento dos botoes de numerais
const numButtons = document.querySelectorAll(".num") 

numButtons.forEach(button => {
    // adicionar escuta 
    button.addEventListener("click", function() {numClick(button.getAttribute("id"))})
})
function numClick(id){
    if (document.getElementById("visor2").value=="0"||document.getElementById("control").value=="true"){
        document.getElementById("visor2").value=id
        document.getElementById("control").value="false"
    } else {
        document.getElementById("visor2").value+=id
    }
}
/*
    Percebi que numa calculadora, ao realizar diversas operações seguidas, o resultado
    vai para o "visor" de baixo, mas, ao clicar em algum numero em seguida, o visor de 
    baixo passa a ter aquele valor. O "control" aqui serve para replicar esse comportamento
*/