## 💻Projeto

A proposta deste projeto era desenvolver uma calculadora utilizando HTML, CSS e Javascript. Para acrescentar a dificuldade, decidi tentar replicar a calculadora do meu computador, de forma que a aparência e as informações no visor da calculadora se correspondessem no que fosse possível.

## 🚀Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript

## 📚 Aprendizado

Neste projeto especificamente, descobri como aplicar um estilo para um grupo de itens com exceções, o caso em questão foi não aplicar o efeito de hover nos botões que estivessem desabilitados, o que fiz da seguinte forma: "button:not(.disabled):hover". De resto, não lembro se houve alguma outra novidade, mas ainda assim foi bastante interessante o desafio, pois para replicar os comportamentos da calculadora foi preciso se atentar ao estado de diversas variáveis.

## :hammer:Resultados

Irei me referir a visor superior e visor inferior como sendo a parte superior e inferior do visor da calculadora.

Ao clicar em um número, se a parte inferior do visor contiver 0 ou um "resultado", o número clicado substitui o conteúdo do visor inferior, senão a informação do visor deve ser concatenada com o número clicado.

Os botões x², ²√x e 1/x atualizam o visor superior com "sqr(x)", √(x)" e "1/(x)", onde x representa o valor do visor inferior antes de clicar em um desses botões e o visor inferior é atualizado com o resultado da operação correspondente. O clique do x² pode ser conferido logo abaixo.

No exemplo abaixo, vemos esses comportamentos replicados. Observe que após apertar x², o visor inferior foi setado com o valor 4 e o visor superior recebeu sqr(2), e logo na sequência foi clicado o botão 3, sumindo o sqr(2) do visor superior e o visor inferior passou a informar 3.

| <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/project_case1.gif?raw=true" style="zoom:50%;" /> | <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/reference_case1.gif?raw=true" style="zoom:33%;" /> |
| :----------------------------------------------------------: | :----------------------------------------------------------: |

Caso o visor superior termine com um sinal de operação matemática e o conteúdo do visor inferior é um resultado, se clicarmos em outros operadores, apenas o símbolo será atualizado no visor superior.

| <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/project_case2.gif?raw=true" style="zoom:50%;" /> | <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/reference_case2.gif?raw=true" style="zoom:33%;" /> |
| :----------------------------------------------------------: | :----------------------------------------------------------: |

O botão +/-, fornece para nós o simétrico do valor disponível no visor inferior, multiplica por -1 em outras palavras. No entanto, caso esse valor corresponda ao resultado das operações x², ²√x e 1/x, o visor superior é atualizado com "negate(x)", onde x representa o conteúdo anterior do visor, e ainda, caso o botão +/- seja clicado outras vezes, teremos "negate(negate(...))".

| <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/project_case3.gif?raw=true" style="zoom:50%;" /> | <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/reference_case3.gif?raw=true" style="zoom:33%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

Caso sejam identificada uma divisão por zero, seja de um número não nulo por zero ou zero por zero, uma mensagem de erro será apresentada na tela, "Não é possível dividir por zero" e "Resultado indefinido" respectivamente. Esse comportamento deve ser desencadeando tanto ao clicar em "=" quanto numa expressão de várias operações.

| <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/project_case4.gif?raw=true" style="zoom:50%;" /> | <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/reference_case4.gif?raw=true" style="zoom:33%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

Uma mensagem também deve ser desencadeada quando o valor do visor inferior é zero e o botão 1/x é clicado.

| <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/project_case5.gif?raw=true" style="zoom:50%;" /> | <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/reference_case5.gif?raw=true" style="zoom:33%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

Outra mensagem é desencadeada quando é calculada a raiz quadrada de um número negativo.

| <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/project_case6.gif?raw=true" style="zoom:50%;" /> | <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/reference_case6.gif?raw=true" style="zoom:33%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

O botão de porcentagem tem 3 comportamentos. Se o visor contiver apenas um elemento, seja um número comum ou o resultado das operações x², ²√x e 1/x, o visor superior e inferior são setados com 0 . Caso uma expressão de soma ou subtração esteja montada, o segundo termo do visor superior e o visor inferior são atualizados com o valor correspondente a x% do valor do primeiro termo do visor superior. Já se uma expressão de multiplicação ou divisão estiver montada, o segundo termo do visor superior e o visor inferior são atualizados com o valor correspondente a x/100. Em ambos os casos, x corresponde ao valor do visor inferior no momento do clique.

| <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/project_case7.gif?raw=true" style="zoom:50%;" /> | <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/reference_case7.gif?raw=true" style="zoom:33%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

Abaixo é só para mostrar que a % também funciona com resultados de x², ²√x e 1/x

| <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/project_case8.gif?raw=true" style="zoom:50%;" /> | <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/reference_case8.gif?raw=true" style="zoom:33%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

Trabalhei com o tratamento de números não inteiros, mas resolvi não substituir o ponto por vírgula. Também acabei não incluindo a separação de milhares,

| <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/project_case9.gif?raw=true" style="zoom:50%;" /> | <img src="https://github.com/caiohscruz/Calculadora_com_Javascript/blob/master/public/images/reference_case9.gif?raw=true" style="zoom: 33%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

Vários outros comportamentos foram replicados, mas acabei não os incluindo entre os exemplos, mas estão citados em comentários no código.

*Críticas ou sugestões são muito bem vindas.*











