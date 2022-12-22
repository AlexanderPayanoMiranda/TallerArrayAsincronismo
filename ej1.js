/*
Dado el siguiente arreglo [1,2,3,4,5,6,7,8], imprimir los valores
multiplicados por 3 y restados en 10.

    Hago uso de forEach

*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8];

/*
lista.forEach(function (num){
    console.log((num*3)-10);
});
*/

lista.forEach((num) => console.log((num*3)-10));