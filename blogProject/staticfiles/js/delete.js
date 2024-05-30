document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const textBox = document.getElementById("textBox");
  const deleteBtn = document.getElementById("deleteBtn");
  const closeBtn = document.getElementById("closeBtn");

  const post = JSON.parse(sessionStorage.getItem("currentPost"));

  if (post) {
    textBox.innerHTML = `"${post.title}" 편지<br> 정말 삭제하실 거예요..? 🥹`;
  }

  deleteBtn.addEventListener("click", () => {
    handleDelete(post.postId);
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  function handleDelete(postId) {
    const savedLetters = JSON.parse(localStorage.getItem("letters")) || [];
    const updatedLetters = savedLetters.filter(
      (item) => item.postId !== parseInt(postId)
    );
    localStorage.setItem("letters", JSON.stringify(updatedLetters));

    // Redirect to home page
    window.location.href = "/";
  }
});
