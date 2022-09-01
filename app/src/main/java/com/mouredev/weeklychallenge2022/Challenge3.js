/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

var numero = 2;
var imprimus = ". No es primo";
var primus = ". Primo";

for (let i = 0; i < 99; i++){
    if(numero > 2 && numero % 2 == 0){
        console.log(numero + imprimus);
    } else{
        if(numero > 3 && numero % 3 == 0){
            console.log(numero + imprimus);
        } else{
            if(numero > 5 && numero % 5 == 0){
                console.log(numero + imprimus);
            } else{
                if(numero > 7 && numero % 7 == 0){
                    console.log(numero + imprimus);
                } else{
                    console.log(numero + primus);
                }
            }
        }
    }
    numero++
}
