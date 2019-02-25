(function() {
    renderPage();
    renderDogs();

    function renderPage() {
        let template = $("#index-template").html();
        let compiled = Handlebars.compile(template);
        let rendered = compiled(window.language);
        $("#main").html(rendered);
        $("#languageSwitch").click(function() {
            DogPack.switchLanguage();
        });
    }

    function renderDogs() {
        let template = $("#dogs-template").html();
        let compiled = Handlebars.compile(template);
        let rendered = compiled({
            dogs: DogPack.dogs,
            language: window.language
        });
        $("#theDogs").html(rendered);
    }


})();