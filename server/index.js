const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (socket) => {
  console.log('Novo cliente conectado.');

  socket.on('message', (data) => {
    const message = data.toString();
    console.log('Mensagem recebida:', message);

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  socket.on('close', () => {
    console.log('Cliente desconectado.');
  });
});

console.log('Servidor WebSocket rodando em ws://localhost:3000');