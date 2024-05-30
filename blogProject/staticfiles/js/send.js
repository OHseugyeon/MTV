let title = "";
let content = "";

function handleTitleInput(event) {
  title = event.target.value;
}

function handleContentInput(event) {
  content = event.target.value;
}

function goBack() {
  window.location.href = "/";
}

function handleSaveButton() {
  //저장되어야함
//   const newLetter = {
//     content: content,
//     title: title,
//     postId: Date.now(),
//   };

//   const letters = JSON.parse(localStorage.getItem("letters") || "[]");
//   letters.push(newLetter);
//   localStorage.setItem("letters", JSON.stringify(letters));

//   window.location.href = "/";
}
