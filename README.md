# JavaScript


## Escopo das variáveis

O escopo se refere ao local em que podemos acessar a variável no algoritmo (também pode ser em uma função quando trabalhamos com escopos de função). As variáveis poder ser locais ou globais.
As variáveis globais em JavaScript são prejudiciais, em geral, a qualidade do código-fonte JavaScript é avaliada de acordo com o npumero de variáveis e funções globais ( um número elevado é ruim). Portanto, sempre que possível, procure evitar as variáveis globais 

## Operadores
Para realizar qualquer operação em uma linguagem de programação necessitamos de operadores aritméticos. A linguagem JavaScript possui operadores de atribuição, de comparaçõa, lógicos, bit a bit (bitwise) e unários, entre outros.

- Operadores aritméticos.

| Operador| Descrição |
| ---     | ----------|
| +       | Adição    |
| -       | Subtração |
| *       | Multiplicação     |
| /       | Divisão     |
| %       | Módulo (resto de uma operação de divisão)     |
| ++      | Incremento     |
| --      | Decremento     |

- Operadores de atribuição.

| Operador| Descrição |
| ---     | ----------|
| =       | Atribuição    |
| +=      | Atribuição de soma (x += y) == (x=x + y) |
| -=      | Atribuição de subtração (x -= y) == (x=x - y)    |
| *=      | Atribuição de multiplicação (x *= y) == (x=x * y)     |
| /=      | Atribuição de divisão (x /= y) == (x=x / y)     |
| %=      | Atribuição de resto (x %= y) == (x=x % y)     |

- Operadores de comparação.

| Operador| Descrição |
| ---     | ----------|
| ==       | Igual a    |
| ===       | Igual a (tanto o valor quanto o tipo do objeto) |
| !=       | Diferente de     |
| >       | Maior que     |
| >=       | Maior ou igual a     |
| <      | Menor que     |
| <=      | Menor ou igual a     |

- Operador lógico.

| Operador| Descrição |
| ---     | ----------|
| &&       | E    |
| II       | Ou |
| !       | Negação    |

- Operador Bit a Bit (bitwise3).

| Operador| Descrição |
| ---     | ----------|
| &       | E    |
| I       | Ou |
| ~       | Negação    |
| ^       | Ou exclusivo (Xor)    |
| <<      | Deslocamento para a esquerda (left shift) |
| >>      | Deslocamento para a direita (right shift)    |

- Operador typeof

O operador typeof devolve o tipo da variável ou expressão.

#### A dois tipos de dados em JavaScript.

- Tipos de dados primitivos: null (nulo), undefined ( indefinido), string, number (número), boolean (booleano) e symbol (símbolo);
- Tipos de dados derivados/objetos: objetos JavaScript, incluindo funções, arrays e expresso~es regulares.

A linguagem JavaScript também aceita o operador delete, que apaga uma propriedade de um objeto.
```
var myObj = {name: 'John', age: 21};
delete myObj.age;
console.log(myObj); // exibe Object {name: "John"}
```

## Verdadeiro e falso

Em JavaScript, true e false são um pouco complicados. Na maioria das linguagens, os valores booleanos true e false representam os resultados verdadeiro/falso. Em JavaScript, uma string como Packt é avaliada como true.

A tabela a seguir pode nos ajudar a compreender melhjor o funcionamento de true e false.

| Tipo do valor| Resultado |
| ---       | ----------|
| Undefined | false    |
| null      | false    |
| Boolean   | Verdadeiro é true e falso é false    |
| Number    | O resultado é false para +0, -0 ou NaN; caso contrário, é true    |
| String    | O resultado é false se a string for vazia ( o tamanho é 0); caso contrário, é true (tamanho >= 1) |
| Object    | true    |


























































#### Referência ao livro Estruturas de dados e algoritmos com JavaScript 2° edição de Loiane Groner 2018 (quinta reimpressão Fevereiro/2022)
