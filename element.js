/*O prompt 1 pedirá o valor do salário base. 
O prompt 2 pedirá o valor do reajuste. 
No prompt 3 terá que ser mostrado o resultado do cálculo: 
(S. BASE * REAJUSTE) + S.  BASE - TIPO 2 DO EXEMPLO*/

var num1;
var num2;
var result;

num1 = Number(prompt('Salário Base (Salary)'));
console.log('Salário Base (Salary)');
console.log(num1)

num2 = Number(prompt('Reajuste (%) (Adjusted)'));
console.log('Reajuste (%) (Adjusted)');
console.log(num2);

/* Adicionando o "Number" vc está informando ao computador que os elementos do prompt são números :) */

result = ((num1 * num2) / 100) + num1;

/* resultado = (num1 * num2) + num1; */

alert(result);

console.log('O salário com reajuste é (adjusted salary):');
console.log(result);

/* soma = prompt('O resultado é:') */

/* Adicionando >>> Alert(O resultado é); <<< o resultado aparecerá em uma barra. A mesma no qual digitou os números. */