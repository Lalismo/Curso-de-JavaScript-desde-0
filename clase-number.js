//Tipo entero y decimal
const entero = 21
const decimal = 1.23
console.log(typeof entero, typeof decimal)

//Notacion cientifica
const cientifica = 5e3

//Infinitos y NaN (No son numeros)
const infinito = Infinity
const noEsUnNumero = NaN

//Operaciones aritmericas

//Suma, Resta, Multiplicación,Division
const suma = 3 + 4
const resta =  4 - 4
const multiplicacion = 5 * 5
const division = 12 / 4

//Modulo y exponenciacion
const modulo = 15 % 8
const exponenciacion = 2 ** 3

//Precision
//Se tiene que ser cuidadoso ya que al momento de querer comparar algo
//Te puede dar falso
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

//Operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)