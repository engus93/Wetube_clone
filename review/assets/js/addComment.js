import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

let deleteComment;

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const handleDelete = async event => {
  const commentId = event.target.id;
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/del_comment`,
    method: "POST",
    data: {
      commentId
    }
  });
  if (response.status === 200) {
    deleteComment = document.getElementById(`${commentId}-Parent`);
    deleteComment.remove();
    decreaseNumber();
  }
};

const addComment = (commentId, comment) => {
  const div = document.createElement("div");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  div.className = "video__comments-single";
  div.id = `${commentId}-Parent`;
  span.innerHTML = comment;
  button.innerText = "❌";
  button.id = commentId;
  li.appendChild(span);
  div.appendChild(li);
  div.appendChild(button);
  commentList.prepend(div);
  increaseNumber();
};

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(response.data.newCommentID, comment);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  commentList.addEventListener("click", handleDelete);
}

if (addCommentForm) {
  init();
}
