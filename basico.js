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
