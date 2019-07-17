
describe('addName', function () {
    it('should add name to the names greeted if it is not there', function () {

        var greetingLang = GreetingFactory();

        assert.deepEqual(["Victor"], greetingLang.addName("Victor"));
    });
});


describe('greet function', function () {
    it('should greet a person in English ', function () {

        var greetingLang = GreetingFactory();

        assert.deepEqual("Hello, Victor", greetingLang.greetInDiffLanguageS("Victor", "English"));
    });
    it('should greet a person in isiXhosa', function () {

        var greetingLang = GreetingFactory();

        assert.deepEqual("Molo, Victor", greetingLang.greetInDiffLanguageS("Victor", "isiXhosa"));
    });
    it('should greet a person in Afrikaans', function () {

        var greetingLang = GreetingFactory();

        assert.deepEqual("Hallo, Victor", greetingLang.greetInDiffLanguageS("Victor", "Afrikaans"));
    });
});