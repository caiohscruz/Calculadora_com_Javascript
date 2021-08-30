/* Este não é tão funcional, mas aqui trato do reconhecimento do evento de
pressionar teclas para desencadear o clique dos botões correspondentes.
Botões que possuem efeitos específicos no navegador não podem ser mapeados
desta forma, por isso este scrypt acaba só lidando com os numerais, enter, 
ponto, vírgula e operações matemáticas básicas */

/* Adiciona ao documento escuta para o pressionar das teclas e atribui a esse evento
um comportamento */
document.addEventListener ('keypress', (event) => {
    const keyName = event.key;
    const refId = ["0","1","2","3","4","5","6","7","8","9","%"]
    const others = ["+","-","*","/",",",".","Enter",""]
    
    if(refId.includes(keyName)){
        document.getElementById(keyName).click()
    }else if(others.includes(keyName)){
        switch(keyName){
            case "+": {
                document.getElementById("plus").click();
                break;
            }
            case "-":{
                document.getElementById("minus").click();
                break;
            }
            case "*":{
                document.getElementById("times").click();
                break;
            }
            case "/":{
                document.getElementById("div").click();
                break;
            }
            case ",":{
                document.getElementById("dot").click();
                break;
            }
            case ".":{
                document.getElementById("dot").click();
                break;
            }
            case "Enter":{
                document.getElementById("equal").click();
                break;
            }
        }
    }
});