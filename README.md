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

## Estruturas de controle

JavaScript tem um conjunto de estruturas de controle semelhantes a outras como C e Java. Instruções condicionais são tratadas com if ... else e switch. Laços são tratados com as contruções while, do ... while e for

### Instruções condicionais

Podemos usar a instrução if se quisermos executar um bloco de código somente se a condição (expressão) for true, deste modo:
```
var num = 1;
if(num === 1) {
  console.log('num is equal to 1');
}
```
Podemos usar a instrução if ... else se quisermos executar um bloco de código e a condição for true, ou outro bloco de código, somente caso a condição seja false(else), assim:
```
var num = 0;
if (num === 1) {
  console.log('num is equal to 1');
} else {
  console.log('num is not equal to 1, the value of num is ' + num);
}
```
Caso tenhamos varias expressões, podemos usar if ... else diversas vezes para executar blocos de códigos diferentes, de acordo com condições distintas, assim:
```
var month = 5;
if (month === 1) {
  console.log('January');
} else if (month === 2) {
  console.log('February');
} else if (month === 3) {
  console.log('March');
} else {
  console.log('Month is not January, february or March');
}
```
Temos também a instrução switch. Se a condição que estivermos avaliando for a mesma que a anterior (porém a comparação é feita com valores diferentes), podemos usar a instrução switch:
```
var month = 5;
switch (month) {
  case 1:
    console.log('January');
    break;
  case 2:
    console.log('February');
    break;
  case 3:
    console.log('March');
    break;
  default:
    console.log('Month is not January, february or March');
}
```

- A cláusula case determina se o valor switch é igual ao valor cláusula case.
- A instrução break impede que a instrução switch execute o restante da instrução ( caso contrário, todos os scripts de todas as cláusulas case depois daquela com a qual uma correspondência foi feita seriam executados, até que uma instrução break fosse encontrada em uma das clásulas case).
- A instrução default executada por padrão caso nenhuma das instruções case seja true (ou se a instrução case executada não tiver uma instrução break).

### Laços
Os laços são usado com frequência quandotrabalhamos com arrays. Especificamente, usaremos o laço for em nossos algoritmos.

-O laço for é exatamente igual ao de C e de Java. É contituído de um contador de laço que, em geral, recebe um valor  numérico; em seguida, a variável é comparada com outro valor (o script dentro do laço for será executado enquanto essa condição for verdadeira) e, por fim, o valor numérico é incrementado ou decrementado.
No exemplo abaixo, temos um laço for. ele exibe o valor de i no console enquanto i for menor que 10; i é iniciado com 0, portanto o código a seguir exibirá os valores de 0 a 9:
```
for (var i = 0; 1 < 10; i++) {
  console.log(i);
}
```

- O bloco de código dentro do laço while será executado enquando a condição for verdadeira. no Código abaixo, temos uma variável i, inicializada com o valor 0, e queremos que o valor de i seja exibido enquanto i for menor que 10 (ou menor ou igual a 9). A saída mostrata os valores de 0 a 9.
```
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```
- O laço do ... while é muito parecido com o laço while. A única diferença é que, no laço whilçe, acondição é avaliada antes da execução do bloco de código, enquanto no laço do ... while, ela é avaliada depois do bloco de código ter sido executado. O laço do...while garante que o bloco de código seja executado pelo menos uma vez. O código a seguir também exibe os valores de 0 a 9:
 ```
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

### Funções
As funções são muito importantes quando trabalhamos com JavaScript. Também faremos uso de funções em nossos exemplos.
O código abaixo mostra a sentaxe básica de uma função. Ela não tem argumentos nem a instrição return:
```
function sayHello() {
  console.log('Hello!');
}
```
Pare executar esse código, basta usar a instrução a seguir:
```
sayHello();
```
Também podemos passar argumentos para uma função. Argumentos são variáveis com as quais se supõe que a função fará algo. O código a seguir mostra como usar argumentos com funções:
```
funcrion output(text) {
  console.log(text);
}
```
Para usar essa função, podemos utilizar o seguinte código:
```
output('Hello!');
```
Você pode usar quantos argumentos quiser, assim:
```
output('Hello!', 'Other text');
```
Nesse caso, apenas o primeiro argumento será usado pela função; o segundo será ignorado. Uma função também pode devolver um valor:
```
function sum(num1, num2) {
  return num1 + num2;
}
```
Essa função calcula a soma de dois números especificados e devolve o resultado. Podemos usá-la da seguinte maneira:
```
var result = sum(1, 2);
output(result); // a saída é 3
```

### Programação orientada a objetos em JavaScript
Objetos JavaScript são coleções bem simples de pares nome-valor. Há duas maneiras de criar um objeto simples em JavaScript. A primeira:
```
var obj = new Object();
```
A segunda:
```
var obj = {};
```
Também podemos criar um objeto completo, desta maneira:
```
obj = {
  name: {
    first: 'Gandalf',
    last: 'the Grey'
  },
  address: 'Middle Earth'
};
```
Como podemos ver, para declarar um objeto JavaScript, pares [chave, valor] são usados, nos quais a chave pode ser considerada um atributo do objeto, e o valor é o valor da propriedade. Todas as classes que criaremos neste livro serão objetos JavaScript, como Stack, Set, LinkedList, Dictionary, Tree, Graph, e assim por diante.
Em POO (Programação Orientada a Objetos), um objeto é uma instância de uma classe. Uma classe define as características do objeto. Em nossos algoritmos e estruturas de dados, criaremos algumas classes que representarão objetos. Eis o modo como podemos declarar uma classe (contrutor) que representa um livro:
```
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn =isbn;
}
```
Para instanciar essa classe, podemos usar o código a seguir:
```
var book = new Book('title', 'pag', 'isbn');
```
Então podemos acessar as suas propriedades e atualizá-las deste modo:
```
console.log(book.title); // exibe o título do livro
book.title = 'new title'; // atualiza o valor do título do livro
console.log(book.title); // exibe o valor atualizado
```
Uma classe também pode conter funções (em geral, também são chamadas de métodos). Podemos declarar e usar uma função/método conforme o código a seguir:
```
Book.prototype.printTitle = function() {
  console.log(this.title);
};
book.printTitle();
```
Também podemos declarar funções diretamente na definição de classe:
```
function Book(title, pages, isbn) {
  this.title = title
  this.pages = pages
  this.isbn = isbn
  this.printIsbn = function() {
    console.log(this.isbn);
  };
}
book.printIsbns();  
```















































#### Referência ao livro Estruturas de dados e algoritmos com JavaScript 2° edição de Loiane Groner 2018 (quinta reimpressão Fevereiro/2022)
