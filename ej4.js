const personas = [
    {
        nombre: "Marcelo",
        edad: 20,
        email: "prueba1@mail.com",
    },
    {
        nombre: "Jorge",
        edad: 25,
        email: "prueba2@mail.com",
    },
    {
        nombre: "José",
        edad: 30,
        email: "prueb3@mail.com",
    },
    {
        nombre: "Marco",
        edad: 32,
        email: "prueba4@mail.com",
    },
];

let ul = document.createElement("ul");

const lista_filtrada = personas.filter((persona_f) => persona_f.nombre[0] === "M");

const lista = lista_filtrada.map((persona) => {

    let persona_nombre = document.createTextNode(persona.nombre);
    ul.appendChild(persona_nombre);

    let ul_sub = document.createElement("ul");

    let li_edad = document.createElement("li");
    let li_edad_text = document.createTextNode(persona.edad);
    li_edad.appendChild(li_edad_text);

    let li_email = document.createElement("li");
    let li_email_text = document.createTextNode(persona.email);
    li_email.appendChild(li_email_text);

    ul_sub.appendChild(li_edad);
    ul_sub.appendChild(li_email);

    ul.appendChild(ul_sub);
});

document.body.appendChild(ul);