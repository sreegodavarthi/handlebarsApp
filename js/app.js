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
        $("#score").find("small").click(function() {
            DogPack.clearDogs();
            window.location.href = "?" + Handlebars.helpers.getLanguageFilter(window.language.langId);
        });
    }

    function renderDogs() {
        let template = $("#dogs-template").html();
        let compiled = Handlebars.compile(template);
        let filteredDogs = DogPack.getFilteredDogs(DogPack.dogs);
        let rendered = compiled({
            dogs: DogPack.getPaginatedDogs(filteredDogs),
            language: window.language
        });
        $("#theDogs").html(rendered);
        renderPages(filteredDogs);
    }

    function renderPages(dogs) {
        let template = $("#page-template").html(),
            compiled = Handlebars.compile(template),
            rendered = compiled({ dogs: dogs });
        $("#pagination").html(rendered);
    }


})();