document.addEventListener("DOMContentLoaded", function () {
  const letterWrapper = document.getElementById("letterWrapper");

  const savedLetters = localStorage.getItem("letters");
  const letterList = savedLetters ? JSON.parse(savedLetters) : [];

  dataList.forEach((e) => {
    const letter = document.createElement("div");
    letter.className = "letter";
    letter.textContent = e.title;
    letter.addEventListener("click", () => navigateToDetail(e.postId));
    letterWrapper.appendChild(letter);
  });

  letterList.forEach((e) => {
    const letter = document.createElement("div");
    letter.className = "letter";
    letter.textContent = e.title;
    letter.addEventListener("click", () =>
      navigateToDetail(e.postId, letterList)
    );
    letterWrapper.appendChild(letter);
  });
});

function goSend() {
  window.location.href = "/pages/send.html";
}

function navigateToDetail(postId, letterList) {
  const state = letterList ? { state: { letterList } } : null;
  const url = `/pages/detail.html?postId=${postId}`;
  window.location.href = state
    ? `${url}&state=${encodeURIComponent(JSON.stringify(state))}`
    : url;
}
