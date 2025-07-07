

const msg = document.querySelector(".text")
const nomeMsg = document.querySelector(".username-text")

function criarMsg(){
    const nome = document.getElementById("username").value;
    const msgEsc = document.getElementById("message").value;

    if (!nome || !msgEsc) return;

    const mensagem = {
        nome: nome,
        message: msgEsc
    };

    const template = document.getElementById("message-template");
    const novaMsg = template.cloneNode(true);
    novaMsg.style.display = "block";
    
    novaMsg.querySelector(".username-text").textContent = mensagem.nome;
    novaMsg.querySelector(".text").textContent = mensagem.message;

    document.querySelector(".messages").appendChild(novaMsg);
    document.getElementById("message").value = "";
}