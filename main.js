// console.log("uno")
// console.log("dos")
// setTimeout(()=>{
//     alert("hola mundo")    
// },6000);
// llamadoAunaAPI()
// console.log("tres")
// console.log("cuatro")
// console.log("cinco")


async function llamadoAunaAPI() {
    const respuesta = await fetch("https://api.escuelajs.co/api/v1/categories") //fecth es el mensajero que trae informacion de la api
    const datos = await respuesta.json()
    imprimirDatos(datos)

}
llamadoAunaAPI()


const tbody = document.querySelector(".tbody")

function imprimirDatos(infoApi) {
    infoApi.forEach(element => {
        tbody.innerHTML += `
    <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>
        <img src="${element.image}" alt="${element.image}" width=100px>
        </td>
        <td>${element.creationAt}</td>
        <td>${element.updatedAt}</td>

    
    </tr>`
    });
}

const newCategory = {
    name: "Esteban garcia",
    image: "https://optim.tildacdn.one/tild6238-3035-4335-a333-306335373139/-/resize/824x/-/format/webp/IMG_3349.jpg"
}

const btnEnviar = document.querySelector(".btn-enviar")
const btnEliminar = document.querySelector(".btn-eliminar")

btnEnviar.addEventListener("click", enviarDatos)

btnEliminar.addEventListener("click",eliminarDatos) //

function enviarDatos() {
   
    fetch("https://api.escuelajs.co/api/v1/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCategory)

    })
   
}

function eliminarDatos() {
    let id=prompt("Ingresar el ID de la categoria que quieres eliminar")

    fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    
    })
    
}


// GET  => Obtener información
// POST => envia infomacion
// PUT  => Actualizar informacion
// PATCH  => Actualiazar un dato puntualmente
// DELETE  => Para eliminar