function GreetingFactory(names) {
    var namesGreeted = names || {};

    function greetInDiffLanguages(name, lang) {
        if(!lang){
            return "First select the language "
        }
         var nameUpp = name.toUpperCase()

        if (namesGreeted[nameUpp] === undefined){
            namesGreeted[nameUpp] = 0;
        }
    
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
 function counter (){
     var peopleCounted = Object.keys(namesGreeted)
     return peopleCounted.length;

 }
 function getName() {
    return namesGreeted;
}
console.log()
    return {
       
        greetInDiffLanguages,
        counter,
        getName
    }
}
