var langButtonElement = document.querySelector(".langButton");
var greetMeBtnElement = document.querySelector(".greetMeBtn");
var displayPlaceElement = document.querySelector(".displayPlace");
var textBoxElement = document.querySelector(".textBox");

var type = GreetingFactory()

function radioBtn() {
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");//language is name of my buttons from html
    if (checkedRadioBtn) {
        var languageType = checkedRadioBtn.value;
}
if(textBoxElement.value){
    var displayArea = type.greetInDiffLanguageS(textBoxElement.value, languageType);
    displayPlaceElement.innerHTML = displayArea;
}
}
greetMeBtnElement.addEventListener('click', radioBtn);
