const title = document.getElementById("title");
const text = document.querySelector(".text");
const button = document.querySelector("#changeButton");
const box = document.getElementById("box");
const status = document.querySelector(".status");

button.addEventListener("click", function () {
  title.textContent = "Updated Title";
  text.textContent = "The DOM has been changed!";
  
  if (status) {
    status.textContent = "Status: Active";
  }
  
  if (box) {
    box.style.padding = "30px";
    box.classList.add("active");
  }
});
