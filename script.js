let menu = document.querySelectorAll('.sidebar')
let isMenu = false;
function sidebarOpen() {
    if(!isMenu) {
        menu[0].style.display = "flex"; 
        isMenu = true;
    }
    else {
        menu[0].style.display = "none";
        isMenu = false;
    }
}
