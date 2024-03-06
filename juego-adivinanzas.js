/*
Juguemos a adivinar la palabra.

El usuario tiene 3 intentos para adivinar la palabra

Requerimientos:

-El usuario debe tener una palabra oculta
-El juego puede dar 1 pista de la palabra
-El usuario debe ingresar una suposición
-el juego debe verificar si la suposición del usuario es correcta.
-El juego debe tener un número limitado de intentos.
-El juego debe terminar cuando el usuario adivine la parabra o se quede sin intentos.


*/

let palabraOculta = "javascript"
let intentos = 3


function jugarAdivinaLaPalabra() {
    alert("Bienvenido a jugar adivina la palabra oculta")
    alert("Tienes 3 intentos para adivinar la palabra")
    alert("-pista- la palabra oculta es un lenguaje de programacion")

    while (intentos > 0) {
        let suposicion = prompt("Adivina la palabra: ")

        if (suposicion.toLowerCase() === palabraOculta) {
            alert("¡Correcto! Has adivinado la palabra.")
            break
        } else {
            intentos--
            if (intentos > 0) {
                alert(`Incorrecto, Aun tienes ${intentos} intento restantes`)
            } else {
                alert(`Agotaste tus intentos, la palarba oculta era ${palabraOculta}`)
            }
        }
    }
}
jugarAdivinaLaPalabra()