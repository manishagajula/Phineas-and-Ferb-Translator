var txtInput = document.querySelector(".txt-input");

var btnTranslate = document.querySelector("#btn-translate");

var outputMsg = document.querySelector(".txt-output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(inputText) {
  return serverURL + "?" + "text=" + inputText;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert(" there's something wrong with server! Try again later sometime");
}

function clickHandler() {
  var inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputMsg.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
