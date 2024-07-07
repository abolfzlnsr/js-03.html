debugger
const menu = [
    {
        title: "about us",
        URL: "https://google.com",
        tooltip: "about us",

    },
    {
        title: "contact us",
        URL: "https://soft98.ir",
        tooltip: "call us",
    },
    {
        title: "home",
        URL: "https://w3school.com",
        tooltip: "the firs page",
    },
    {
        title: "menu",
        URL: "https://github.com",
        tooltip: "menu bar",
    },
];



function myFunction() {
    let example = "";
    for (let i = 0; i < menu.length; i++) {
        example +=
            "<a style='margin:30px' href='" + menu[i].URL +"'title='" +menu[i].tooltip+ "'> " +  menu[i].title + "</a>";
    }

    return example;

}
document.getElementById("demo").innerHTML = myFunction();