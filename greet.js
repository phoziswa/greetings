function GreetingFactory() {
    var namesGreeted = []

    function addName(name) {
        var nameExist = namesGreeted.includes(name)
        if (nameExist === false) {
            namesGreeted.push(name);
        }
    }
    function returningNamesGreeted() {
        return namesGreeted;

    }


    function setName(name) {

        namesGreeted = name
    }

    function getName(name) {
        return name;
    }


    function greetInDiffLanguageS(name, lang) {
        
        var upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);
        if (lang === 'English') {
            return "Hello, " + upperCaseName;
        }
        else if (lang === 'isiXhosa') {
            return "Molo, " + upperCaseName;
        }
        else if (lang === 'Afrikaans') {
            return "Hallo, " + upperCaseName;
        }
    }

    return {
        addName,
        setName,
        getName,
        greetInDiffLanguageS,
        returningNamesGreeted

    }
}
