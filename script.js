
function abrirModal() {
    document.getElementById('modalOverlay').classList.add('open');
}

function fecharModal() {
    document.getElementById('modalOverlay').classList.remove('open');
}

function validarLogin(event) {
    event.preventDefault();
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    if (user === "admin" && pass === "1234") {
        window.location.href = "sucesso.html";
    } else {
        window.location.href = "erro.html";
    }
}