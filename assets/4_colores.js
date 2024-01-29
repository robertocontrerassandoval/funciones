
  
//buscar elementos

const divA = document.querySelector('#ele1')
const divB = document.querySelector('#ele2')
const divC = document.querySelector('#ele3')
const divD = document.querySelector('#ele4')
const divKey = document.querySelector('#key')


// funcion para cambiar de color

const cargarColorFondo = (event) => {
    event.target.style.backgroundColor = "black"
}

// ejecutar funcion

divA.addEventListener("click", cargarColorFondo)
divB.addEventListener("click", cargarColorFondo)
divC.addEventListener("click", cargarColorFondo)
divD.addEventListener("click", cargarColorFondo)

const crearNuevoDiv = (color) => {
    const newDiv = document.createElement("div")
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.margin = "20px";
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv)
}

document.addEventListener("keydown", function (event){
    if (event.key === "a") {
        divKey.style.backgroundColor = "pink"
    } else if (event.key === "s"){
        divKey.style.backgroundColor = "orange"
    } else if (event.key === "d"){
        divKey.style.backgroundColor = "skyblue"
    } else if (event.key === "q") {
        crearNuevoDiv("purple")
    } else if (event.key === "w") {
        crearNuevoDiv("gray")
    } else if (event.key === "e") {
        crearNuevoDiv("brown")
    }

})