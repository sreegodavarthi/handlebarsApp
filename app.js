let template = Handlebars.compile("<div>Hello {{name}}</div>");
let appEl = document.querySelector("#app");
appEl.innerHTML = template({
    name: "Handlebars"
});