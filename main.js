const alumnos = [{
    nombre: "Raziel Gaitan",
    email: "razielgaitan@gmail.com",
    materia: "Fisica 2",  
}, {
    nombre: "Marcos Acuña",
    email: "marcosacuña@gmail.com",
    materia: "Analisis Matemático 1",  
}, {
    nombre: "Rodrigo De Paul",
    email: "rodridepaul@gmail.com",
    materia: "Algebra",  
}, {
    nombre: "Leandro Paredes",
    email: "leaparedes@gmail.com",
    materia: "Analisis de Sistemas",  
}]

const contenedor = document.querySelector(".grid-container");
const boton = document.querySelector(".boton");

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;
    contenedor.innerHTML += htmlCode;
}

boton.addEventListener("click", ()=>{
    let confirmar = confirm("Realmente desea confirmar?");

    if (confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
})