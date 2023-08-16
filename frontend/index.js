const createComment = async () => {
  const input = document.querySelector("input");

  showSentComment(input.value);

  const response = await fetch("http://localhost:3001/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comment: input.value }),
  });

  const data = await response.json();
  input.value = "";
  return data.comment;
};

const showSentComment = (comment) => {
  const commentsContainer = document.getElementById("comments-container");

  const pTag = document.createElement("p");
  pTag.setAttribute("class", "comments send");

  pTag.textContent = comment;

  commentsContainer.append(pTag);
};

const getAllComments = async () => {
  const response = await fetch("http://localhost:3001/comments");

  const data = await response.json();
  console.log("data ", data);
  return data.comments;
};

const addComment = (comment) => {
  const commentsContainer = document.getElementById("comments-container");

  const pTag = document.createElement("p");
  pTag.setAttribute("class", "comments receive");

  pTag.textContent = comment;

  commentsContainer.append(pTag);
};

window.onload = async () => {
  const comments = await getAllComments();
  console.log("comments ", comments);
  for (const comment of comments) {
    showSentComment(comment.comment);
    addComment(comment.comment);
  }
  const button = document.querySelector("button");

  button.addEventListener("click", async () => {
    const createdComment = await createComment();

    console.log("created comment ", createdComment);

    addComment(createdComment);
  });
};
