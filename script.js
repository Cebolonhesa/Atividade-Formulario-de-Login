function verificarLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("mensagem").textContent = "Login bem-sucedido!";
        document.getElementById("mensagem").style.color = "green";
    } else {
        document.getElementById("mensagem").textContent = "Nome de usuário ou senha incorretos.";
        document.getElementById("mensagem").style.color = "red";
    }
}
