const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message");
const sendButton = document.querySelector("button");

function sendMessage() {
  const message = messageInput.value.trim();
  
  if (message.length) {
    chatBox.innerHTML += `<p class="message">${message}</p>`;
    messageInput.value = "";
  }
}

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

