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
  let prompt = `generate a short brazilian poem with the ${suggestionWord.value}, in four short lines, maximum 30 characters per line, show just the poem, and sign with "Seu AI" in <strong> element`;
  let context = "You are an experienced brazilian poet";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
  //let poem = document.querySelector("#Poem");
  //poem.innerHTML = "Generating a Poem for you, aguarde...";
}

let poemFormGenerator = document.querySelector("#generatorPoem");
poemFormGenerator.addEventListener("submit", generatePoem);
