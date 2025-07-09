const socket = new WebSocket("ws://localhost:3000");

socket.onmessage = (event) => {
    const { user, message } = JSON.parse(event.data);
    const msgBox = document.getElementsByClassName("messages")[0];
    msgBox.innerHTML += `<div class="msg-send" id="message-template">
                <span class="username-text">${user}</span>: <span class="text">${message}</span>
            </div>`;
    msgBox.scrollTop = msgBox.scrollHeight;
};

function sendMessage() {
    const user = document.getElementById("username").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!user || !message) return;

    socket.send(JSON.stringify({ user, message }));
    document.getElementById("message").value = "";
}