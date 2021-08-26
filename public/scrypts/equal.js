// tratamento do botao de igual
const equalButton = document.getElementById("equal") 

equalButton.addEventListener("click", function() {equalClick()})

function equalClick(){
    if (document.getElementById("control").value=="false"){
        document.getElementById("visor1").value=document.getElementById("a").value+document.getElementById("oper").value+document.getElementById("visor2").value+"="
        document.getElementById("b").value=document.getElementById("visor2").value
        document.getElementById("result").value=eval(
            document.getElementById("a").value+
            document.getElementById("oper").value+
            document.getElementById("b").value
            )
        document.getElementById("visor2").value=document.getElementById("result").value
        document.getElementById("a").value=document.getElementById("result").value
        document.getElementById("control").value="true"
    } else {
        document.getElementById("visor1").value=document.getElementById("a").value+document.getElementById("oper").value+document.getElementById("b").value+"="
        document.getElementById("result").value=eval(
            document.getElementById("a").value+
            document.getElementById("oper").value+
            document.getElementById("b").value
            )
        document.getElementById("visor2").value=document.getElementById("result").value
        document.getElementById("a").value=document.getElementById("result").value
    }
}
