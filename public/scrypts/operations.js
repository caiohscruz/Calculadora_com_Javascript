// tratamento das operacoes basicas
const sOperButtons = document.querySelectorAll(".simple_operation") 

sOperButtons.forEach(button => {
    // adicionar escuta 
    button.addEventListener("click", function() {sOperClick(button.getAttribute("id"))})
})
function sOperClick(oper){
    switch (oper){
        case "plus": 
            oper ="+";
            break;
        case "minus":
            oper ="-";
            break;
        case "times":
            oper ="*";
            break;
        case "div":
            oper ="/";
            break;
    }

/*
    'control' aqui serve para trocar o operador caso o último botao apertado
    tenha sido um botão de um operador matemático, digo, se o último botão apertado
    por exemplo foi o de multiplicação e agora você clica em soma, não tem uma operação
    a ser feita, apenas devemos trocar a próxima operação experada
*/
    if(document.getElementById("control").value=="true"){
        document.getElementById("visor1").value=document.getElementById("a").value+oper
    }else{
        if (document.getElementById("visor1").value==""){
            document.getElementById("a").value=document.getElementById("visor2").value
            document.getElementById("visor1").value=document.getElementById("visor2").value+oper
        } else {
            document.getElementById("b").value=document.getElementById("visor2").value
            document.getElementById("result").value=eval(
                document.getElementById("a").value+
                document.getElementById("oper").value+
                document.getElementById("b").value
                )
                document.getElementById("visor1").value=document.getElementById("result").value+oper
                document.getElementById("visor2").value=document.getElementById("result").value
                document.getElementById("a").value=document.getElementById("result").value
            }
            document.getElementById("control").value="true"
            document.getElementById("oper").value=oper
    }
   
}