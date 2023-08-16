import { createMainContainer } from "./containers.js";
import { getAllMessages } from "./utils.js";

window.addEventListener("DOMContentLoaded", async () => {
  createMainContainer();
  
  await getAllMessages();
});
