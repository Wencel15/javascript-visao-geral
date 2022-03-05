//Escopo das variáveis: Exemplo;

var myVariable = 'global';
myOtherVariable = 'global';
function myFunction() {
	var myVariable = 'local';
  return myVariable;
}
function myOtherFunction() {
	myOthervariable = 'local';
  return myOtherVariable;
}
console.log(myVariable); // Referencia uma variavél global
console.log(myFunction()); // declarado variável myVariable dentro da função MyFunction como uma variável local.
console.log(myOtherVariable);// Exibira global porque foi referenciado a variável global chamada myOtherVariable inicializada na linha 2
console.log(myOtherFunction()); // exibira local. Na função myOtherFunction referenciamos a variavél global myOtherVariable e atribuimos o valor local, pois não declaramos a variável usando a palavra reservada var
console.log(myOtherVariable);//exibira local pois o valor da variavel foi alterado em myOtherFunction.

// Operadores aritméticos.

var num = 0; 
num = num + 2;
num = num * 3;
num = num /2;
num++;
num--;

// Operadores de atribuição.

num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

// Operadores de comparação.

console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 ; ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

// Operadores lógicos.

console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));

// Operadores Bit a Bit (bitwise)

console.log('5 & 1 : ', (5 & 1));
console.log('5 | 1 : ', (5 | 1));
console.log('~ 5 : ', (~5));
console.log('5 ^ 1 : ', (5 ^ 1));
console.log('5 << 1 : ', (5 << 1));
console.log('5 >> 1 : ', (5 >> 1));

// Operador typeof

console.log('typeof num: ', typeof num);
console.log('typeof Packt: ', typeof 'Packt');
console.log('typeof true: ', typeof true);
console.log('typeof [1, 2, 3]: ', typeof [1, 2, 3]);
console.log('typeof {name: John}: ', typeof {name: 'John'});

// Vedadeiro e falso

function testTruthy(val) {
	return val ? console.log('truthy') : console.log('falsy');
}
testTruthy(true); //true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (objeto é sempre true)
testTruthy(''); // false
testTruthy('Packt'); // true
testTruthy(new String('')); // true (objeto é sempre true)
testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (objeto é sempre true)
testTruthy({}); // true (objeto é sempre true)

var obj = {name: 'John'};

testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // false (propriedade não existe)
