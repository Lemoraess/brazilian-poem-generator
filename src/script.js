function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "a paz invadiu o meu coração",
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

let poemFormGenerator = document.querySelector("#generatorPoem");
poemFormGenerator.addEventListener("submit", generatePoem);
