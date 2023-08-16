import { sendMessage } from "./utils.js";

export const createMainContainer = () => {
  const mainContainer = document.createElement("section");
  const heading = document.createElement("h2");

  mainContainer.setAttribute("id", "chat-container");
  heading.setAttribute("class", "chat-heading");

  heading.textContent = "Simple Chat";

  mainContainer.appendChild(heading);
  mainContainer.append(createChatContentContainer(), createChatFormContainer());

  document.body.appendChild(mainContainer);
};

export const createChatContentContainer = () => {
  const commentsContainer = document.createElement("div");
  commentsContainer.setAttribute("id", "chat-content-container");

  return commentsContainer;
};

export const createChatFormContainer = () => {
  const chatFormContainer = document.createElement("form");
  const chatInput = document.createElement("input");
  const submitButton = document.createElement("button");
  const inputLabel = document.createElement("label");
  const chatInputContainer = document.createElement("div");

  chatFormContainer.setAttribute("id", "chat-form-container");
  chatFormContainer.setAttribute("class", "form-items");

  chatInputContainer.setAttribute("id", "chat-input-container");
  inputLabel.setAttribute("class", "input-label form-items");
  inputLabel.textContent = "Enter message";
  chatInput.setAttribute("class", "chat-input form-items");
  submitButton.setAttribute("class", "chat-submit form-items");
  submitButton.textContent = "Send Message";

  chatFormContainer.addEventListener("submit", async (event) => {
    event.preventDefault();
    await sendMessage();
  });

  chatInputContainer.append(inputLabel, chatInput);
  chatFormContainer.append(chatInputContainer, submitButton);

  return chatFormContainer;
};
