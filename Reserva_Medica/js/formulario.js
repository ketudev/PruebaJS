// Implementar formulario

const sesionUsuario = JSON.parse(localStorage.getItem("sesionUsuario"));
document.getElementById("nombreUsuario").textContent = sesionUsuario.usuario;

const btnGuardar = document.getElementById("btnGuardar");
const contenedorErrores = document.getElementById("errores");

btnGuardar.addEventListener("click", () => {
    
    contenedorErrores.innerHTML = ``;
    let mensaje = document.getElementById("mensaje")
    let nombrePaciente = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let especialidad = document.getElementById("especialidad").value
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let motivo = document.getElementById("motivo").value.trim();

    let errores = [];

    if (nombrePaciente === "") {
        errores.push("Debe ingresar el nombre del paciente");
    }


    if (edad === "") {
        errores.push("Debe ingresar la edad del paciente");
    }
    else if (edad < 1 || edad >110) {
        errores.push("Debe ingresar una edad válida (1-110)");
    }

    if (especialidad === "") {
        errores.push("Debe ingresar la especialidad de la hora");
    }


    if (fecha === "") {
        errores.push("Debe ingresar la fecha a agendar");
    }
    // else if (Date.parse(fecha) < Date.now()) {
    //     console.log(Date.parse(fecha));
    //     console.log(Date.now());
    //     errores.push ("Por favor ingresar una fecha válida (No fechas pasadas)")
    // }


    if (hora === "") {
        errores.push("Debe ingresar la hora a agendar");
    }

    
    if (motivo === "") {
        errores.push("Debe ingresar el motivo de la consulta");
    }

    if (errores.length > 0) {
        contenedorErrores.innerHTML = `
            <ul>
               ${errores.map(error => `<li>${error} </li>`).join("")} 
            </ul>
        `;
        return;
    }

    else if (errores.length === 0) {
        const horaMedica = {
            nombrePaciente,
            edad,
            especialidad,
            fecha,
            hora,
            motivo
        };
        mensaje.textContent = "Espere mientras agendamos su consulta..."
        mensaje.style.color = "Blue"
        localStorage.setItem(
            "horaMedica",
            JSON.stringify(horaMedica)
        );

        setTimeout(function () {
            window.location.href = "exito.html"
        }, 3000);
    }





})