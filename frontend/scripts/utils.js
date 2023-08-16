export const sendMessage = () => {
  const chatInput = document.querySelector(".chat-input");

  if (!chatInput.value) return;

  const socket = io("http://localhost:5000", { transports: ["websocket"] });

  socket.emit("message", chatInput.value);
  chatInput.value = "";
};
const socket = io("http://localhost:5000", { transports: ["websocket"] });

socket.on("message", function (msg) {
  console.log("socket message ", msg);
  showMessage(msg);
});

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
  const response = await fetch("http://localhost:5000/comments");

  const { messages } = await response.json();
  console.log("messages ", messages);
  for (const message of messages) {
    showMessage(message);
  }
};
