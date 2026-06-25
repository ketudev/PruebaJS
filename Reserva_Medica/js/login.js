// Implementar login

const contenedorErrores = document.getElementById("errores");
const btnIngresar = document.getElementById("btnIngresar");

btnIngresar.addEventListener("click", () => {

    contenedorErrores.innerHTML = ``;
    let usuario = document.getElementById("usuario").value.trim();
    let password = document.getElementById("password").value.trim();
    let mensaje = document.getElementById("mensaje")
    const usuarioCorrecto = "javier.jaramillo";
    const passwordCorrecta = "JS2026JJ05";
    let errores = [];


    if (usuario === "") {
        errores.push("Debes ingresar el nombre de usuario")
    }


    if (password === "") {
        errores.push("Debes ingresar una contraseña")
    }


    if (usuario === usuarioCorrecto && password === passwordCorrecta) {
        mensaje.textContent = "Acceso permitido, se te redireccionará en 3 segundos";
        mensaje.style.color = "green";
        const sesionUsuario = { usuario, password };
        localStorage.setItem("sesionUsuario", JSON.stringify(sesionUsuario))

        setTimeout(function(){
            window.location.href = "formulario.html"
        },3000);
        
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