function displayPoem(response) {
  console.log("gerando poema");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let suggestionWord = document.querySelector("#inputBox");
  let apiKey = "5btac2eb2ed52b236021789ofe9a3348";
  let prompt = `In four short lines, on basic HTML, generate a short brazilian poem with the ${suggestionWord.value}, show JUST the poem, for example "Rosas são vermelhas </br> lirios azuis </br> eu te amo </br> e isso não rima</br> Seu AI" and sign with "Seu AI" in <strong> element`;
  let context = "You are an experienced brazilian poet";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="animate__animated animate__bounce animate__delay-0.5s">Generatind a Brazilian poem about ${suggestionWord.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormGenerator = document.querySelector("#generatorPoem");
poemFormGenerator.addEventListener("submit", generatePoem);
