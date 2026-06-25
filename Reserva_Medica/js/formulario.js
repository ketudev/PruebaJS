// Implementar formulario

const sesionUsuario = JSON.parse(localStorage.getItem("sesionUsuario"));
document.getElementById("nombreUsuario").textContent = sesionUsuario.usuario;

const btnGuardar = document.getElementById("btnGuardar");
const contenedorErrores = document.getElementById("errores");

btnGuardar.addEventListener("click", () => {
    console.log(sesionUsuario.usuario)

    const nombrePaciente = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const especialidad = document.getElementById("especialidad").value
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const motivo = document.getElementById("motivo").value.trim();

    let errores = [];

    if (nombrePaciente === "") {
        errores.push("Debe ingresar el nombre del paciente");
    }


    if (edad === "") {
        errores.push("Debe ingresar la edad del paciente");
    }


    if (especialidad === "") {
        errores.push("Debe ingresar la especialidad de la hora");
    }


    if (fecha === "") {
        errores.push("Debe ingresar la fecha a agendar");
    }


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

    const horaMedica = {
        nombrePaciente,
        edad,
        especialidad,
        fecha,
        hora,
        motivo
    };

    localStorage.setItem(
        "horaMedica",
        JSON.stringify(horaMedica)
    );

    window.location.href = "exito.html"

})