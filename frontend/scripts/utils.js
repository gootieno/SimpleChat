export const sendMessage = async () => {
  const chatInput = document.querySelector(".chat-input");

  if (!chatInput.value) return;

  const response = await fetch("http://localhost:3001/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: chatInput.value }),
  });

  const data = await response.json();

  showMessage(data.message);

  chatInput.value = "";
};

export const showMessage = (message) => {
  const chatContentContainer = document.getElementById(
    "chat-content-container"
  );

  const chatMessage = document.createElement("p");

  chatMessage.setAttribute("class", "chat-messages");
  chatMessage.textContent = message;

  chatContentContainer.appendChild(chatMessage);
};

export const getAllMessages = async () => {
  const response = await fetch("http://localhost:3001/comments");

  const { messages } = await response.json();

  for (const data of messages) {
    showMessage(data.message);
  }
};
