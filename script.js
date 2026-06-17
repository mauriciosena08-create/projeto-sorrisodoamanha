
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
function qrcode(){
    const qr = document.getElementById("container"); 
    const novoQrcode = document.createElement("img");
    novoQrcode.src = "DnjprL.png"
    novoQrcode.style.width = '100px';
    novoQrcode.style.maxWidth = '400px';
    container.appendChild(novoQrcode);
}