import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const diminishNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const deleteComment = async event => {
  if (event.target.id) {
    const commentId = event.target.id;
    const response = await axios({
      url: `/api/${commentId}/delete`,
      method: "POST"
    });
    if (response.status === 200) {
      const parent = document.getElementById(`${commentId}Parent`);
      parent.remove();
      diminishNumber();
    }
  }
};

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = comment => {
  const li = document.createElement("li");
  const span1 = document.createElement("span");
  span1.innerHTML = comment;
  li.appendChild(span1);
  commentList.prepend(li);
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
    addComment(comment);
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
  commentList.addEventListener("click", deleteComment);
}

if (addCommentForm) {
  init();
}
