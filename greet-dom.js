var langButtonElement = document.querySelector(".langButton");
var greetMeBtnElement = document.querySelector(".greetMeBtn");
var displayPlaceElement = document.querySelector(".displayPlace");
var textBoxElement = document.querySelector(".textBox");
var counterElement = document.querySelector(".counter");
var resetBtnElement = document.querySelector(".resetBtn");

if (localStorage["Names"]) {
    var store = JSON.parse(localStorage["Names"])
}
// counterElem.innerHTML = type.counter();

var type = GreetingFactory(store)
counterElement.innerHTML = type.counter();

function radioBtn() {
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");//language is name of my buttons from html
    if (checkedRadioBtn) {
        var languageType = checkedRadioBtn.value;

    }
    if (textBoxElement.value == "" || !isNaN(textBoxElement.value)) {
        return false;
    }


    if (textBoxElement.value) {
        var display = type.greetInDiffLanguages(textBoxElement.value, languageType);
        displayPlaceElement.innerHTML = display;
    }
    textBoxElement.value = ""

    counterElement.innerHTML = type.counter();

    localStorage["Names"] = JSON.stringify(type.getName())


}
function reset() {
    localStorage.clear();
    location.reload();
}
greetMeBtnElement.addEventListener('click', radioBtn);
resetBtnElement.addEventListener('click', reset);