const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const chatMessages = document.querySelector(".chat-messages");

sendButton.addEventListener("click", function() {
  if (userInput.value !== "") {
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = `
      <p>${userInput.value}</p>
    `;
    chatMessages.appendChild(userMessage);
    userInput.value = "";
    
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.innerHTML = `
      <p>Sorry, I am just a sample chatbot and I don't know how to respond to that.</p>
    `;
    chatMessages.appendChild(botMessage);
  }
});
