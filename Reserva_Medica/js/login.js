// Implementar login

const contenedorErrores = document.getElementById("errores");
const btnIngresar = document.getElementById("btnIngresar").addEventListener("click", () => {

    contenedorErrores.innerHTML = ``;
    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    let errores = [];


    if (usuario === "") {
        errores.push("Debes ingresar el nombre de usuario")
    }


    if (password === "") {
        errores.push("Debes ingresar una contraseña")
    }


    if (usuario === "javier.jaramillo" && password === "JS2026JJ05") {
        const sesionUsuario = {usuario, password};
        localStorage.setItem("sesionUsuario", JSON.stringify(sesionUsuario))
        window.location.href = "formulario.html"
    }

    else {
        errores.push("Ingresar Credenciales Correctas")
    }

    if (errores.length > 0) {

        contenedorErrores.innerHTML = `
            <ul>
               ${errores.map(error => `<li>${error} </li>`).join("")} 
            </ul>

        `;

        return;
    }
});