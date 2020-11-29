function MenuSelect() {
    var current_menu = "";
    if (document.URL.includes("projects")) {
        current_menu = "a-projects";
    }
    else {
        var menus = document.URL.split('/');
        current_menu = "a-" + menus[menus.length - 1].replace(".html", "");
    }
    document.getElementById(current_menu).className = "menu-selected";
}