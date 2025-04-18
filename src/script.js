function generatePoem(event) {
  event.preventDefault();
  alert("hi)");
}

let poemFormGenerator = document.querySelector("#generatorPoem");
poemFormGenerator.addEventListener("submit", generatePoem);
