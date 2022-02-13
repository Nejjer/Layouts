const icon = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

let active = false;
icon.onclick = () => {
    if (active) {
        menuBody.classList.remove("active");
        icon.classList.remove("active");
        active = !active;
        return;
    }
    menuBody.classList.add("active");
    icon.classList.add("active");
    active = !active;
}