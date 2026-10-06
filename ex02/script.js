const title = document.getElementById("title");
const paragraph = document.querySelector(".text");
title.textContent = "Hello, DOM!";
paragraph.textContent = "I changed this text with JavaScript!";

title.style.color = "blue";
title.style.fontSize = "40px";

paragraph.classList.add("active");
