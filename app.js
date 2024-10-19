const socket = new WebSocket('ws://localhost:3000');
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Function to display messages
function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
}

// Send message on button click
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
});

// Receive message
socket.addEventListener('message', (event) => {
    displayMessage(event.data);
});
