/*En JavaScript, hay dos conceptos fundamentales:
expresiones y sentencias. Ambos son elementos básicos
del lenguaje, pero tienen propósitos diferentes.

Expresiones:
Definición:
Una expresión es cualquier fragmento de código que produce un valor.
Puede ser tan simple como una variable o tan compleja como una combinación de operadores y funciones.


Ejemplos:
Variables y constantes: let x = 10;
Operaciones aritméticas: 5 + 3 * 2
Llamadas de función: Math.sqrt(25)
Operadores lógicos: a > b && c < d
Literales: 42, 'Hola'


Uso:
Pueden ser utilizadas en cualquier lugar donde se espera un valor,
como asignaciones, parámetros de funciones, retornos de funciones, etc.


Evaluación:
Las expresiones se evalúan para producir un resultado.


Sentencias:
Definición:
Una sentencia es una instrucción que realiza una acción.
Puede contener expresiones, pero su propósito principal
es realizar una operación, como asignar un valor,
declarar una función, o controlar el flujo de ejecución.

Ejemplos:
Asignación de variables: let x = 10;
Declaración de funciones: function saludar() { console.log('Hola'); }
Estructuras de control: if (condición) { /* bloque de código 

Uso:
Definen la estructura y el flujo del programa.


Evaluación:
Las sentencias no producen un valor directamente.
En JavaScript, se evalúan para realizar una acción
o para cambiar el estado del programa.
*/

// Expresión dentro de una sentencia
let resultado = (5 + 3) * 2; // Expresión que se evalúa y se asigna a una variable (sentencia)

// Sentencia if con expresiones
if (resultado > 10) {
  console.log('El resultado es mayor que 10.'); // Expresión dentro de una sentencia
}

// Declaración de función (sentencia) que contiene una expresión
function duplicar(numero) {
  return numero * 2; // Expresión que se evalúa y se devuelve (sentencia)
}

// Llamada a la función con una expresión como argumento
let resultadoDuplicado = duplicar(7); // Expresión que se evalúa y se asigna a una variable (sentencia)