/*
Crear una lista desordenada en HTML con el siguiente arreglo
["Marcelo","Jorge","José","Linder"].

    Hacer uso de forEach, createElement y createTextNode
*/

let ul = document.createElement("ul");
const lista = ["Marcelo", "Jorge", "Jose", "Linder"];

// lista.forEach(function (name) {
//     let li = document.createElement("li");
//     let li_text = document.createTextNode(name);
//     li.appendChild(li_text);
//     ul.appendChild(li);
// });

lista.forEach((name) => {
    let li = document.createElement("li");
    let li_text = document.createTextNode(name);
    li.appendChild(li_text);
    ul.appendChild(li);
});

document.body.appendChild(ul);
