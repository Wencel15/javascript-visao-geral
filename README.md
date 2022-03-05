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

## Funções dos operadores de igualdade ( == E === )

Quando == é usado, os valores poderão ser considerados iguais mesmo se forem de tipos diferentes.

| Type (x)         | Type (y)         |  Resultado |
| ---              | ----------       | --------- |
| null             | undefined        | true |
| undefined        | null             | true |
| Number           | String           | x == to NUmber(y) |
| String           | Number           | toNumber(x) == y |
| Boolean          | Any              | toNumber(x) == y |
| Any              | Boolean          | x == toNumber(y)|
| String ou Number | Object           | x == toPrimitive(y)|
| Object           | String ou Number | toPimitive(x) == y|

Se x e y forem do mesmo tipo, o metodo para comparar os dois valores ou objeto será equals. Qualquer outra combinação não listada na tabela será false.
Os metodos toNUmber e to Primitive são internos e avaliam os valores de acordo com as tabelas a seguir.

- toNumber

| Tipo do valor | Resultado |
| ---     | ----------|
| undefined  | É NaN    |
| null       | É +0 |
| Boolean    | Se o valor for true, o resultado será 1; se o valor for false, o resultado sera +0     |
| Number     | É o valor do npumero    |

- toPirimitive

| Tipo do valor | Resultado |
| ---     | ----------|
| Object  | Se valueOf devolver um valor primitivo, esse valor primitivo será devolvido; caso contrário, se toString devolver um valor primitivo, esse valor será devolvido; senão, um erro será devolvido.    |

O operador === é mais simples do que o ==. Se estivermos comparando dois valores de tipos diferentes, o resultado sempre será false. Se forem do memso tipo, eles serão comparados de acordo com a tabela a seguir:


| Type (x)      | Valores         |  Resultado |
| ---           | ----------       | --------- |
| Number        | x tem o mesmo valor que y (mas não é NaN) | true |
| String        | x e y têm caracteres idênticos            | true |
| Boolean       | x e y são ambos true ou são ambos false   | true |
| Object        | x e y referenciam o mesmo objeto          | true |

























































#### Referência ao livro Estruturas de dados e algoritmos com JavaScript 2° edição de Loiane Groner 2018 (quinta reimpressão Fevereiro/2022)
