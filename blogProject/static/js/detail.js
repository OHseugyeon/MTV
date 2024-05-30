document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.getElementById("backBtn");
  const titleElement = document.getElementById("title");
  const contentBox = document.getElementById("contentBox");
  const deleteBtn = document.getElementById("deleteBtn");
  const modal = document.getElementById("modal");

  const dataList = [
    { postId: 1, title: "첫 편지", content: "안뇽안뇽" },
    { postId: 2, title: "🧡마음을 보내요🧡", content: "히히" },
    { postId: 3, title: "반가워~", content: "나는 멋쟁이다" },
    { postId: 4, title: "천재가 쓴 편지😎", content: "난 왜 이렇게 똑똑할까" },
    { postId: 5, title: "야호!!", content: "행운의 예감" },
    { postId: 6, title: "심바랑 친구할래🧡", content: "난 품바니까" },
    { postId: 7, title: "저메추🤔", content: "마라탕" },
    { postId: 8, title: "아 배고파", content: "붕어빵계란빵국화빵" },
    { postId: 9, title: "슈퍼이끌림💌", content: "유유유유" },
    { postId: 10, title: "네잎클로버🍀", content: "많이많이~🍀" },
  ];
  const letterList = JSON.parse(sessionStorage.getItem("letterList")) || [];

  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("postId");

  const post = postId
    ? dataList.find((item) => item.postId === parseInt(postId)) ||
      letterList.find((item) => item.postId === parseInt(postId))
    : null;

  if (post) {
    titleElement.textContent = post.title;
    contentBox.textContent = post.content;
  }

  backBtn.addEventListener("click", () => {
    window.history.back();
  });

  deleteBtn.addEventListener("click", () => {
    showModal(post);
  });

  function showModal(post) {
    modal.style.display = "block";
    modal.innerHTML = `
        <div class="modal-content">
          <span class="close-button" id="closeButton">&times;</span>
          <p>Are you sure you want to delete "${post.title}"?</p>
          <button id="confirmDelete">Delete</button>
        </div>
      `;

    document.getElementById("closeButton").addEventListener("click", () => {
      modal.style.display = "none";
    });

    document.getElementById("confirmDelete").addEventListener("click", () => {
      deletePost(post.postId);
    });
  }

  function deletePost(postId) {
    // Logic to delete the post from your data source
    modal.style.display = "none";
    // Redirect or update the UI as needed
  }
});
