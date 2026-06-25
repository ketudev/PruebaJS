const horaMedica = JSON.parse(localStorage.getItem("horaMedica"));

document.getElementById("dato1").textContent = horaMedica.nombrePaciente;
document.getElementById("dato2").textContent = horaMedica.edad;
document.getElementById("dato3").textContent = horaMedica.especialidad;
document.getElementById("dato4").textContent = (String(horaMedica.fecha)+" - "+horaMedica.hora+"hrs");
document.getElementById("dato5").textContent = horaMedica.motivo;

const btnCerrar = document.getElementById("btnCerrar");
btnCerrar.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "login.html"
})