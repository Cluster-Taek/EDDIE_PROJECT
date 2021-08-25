const wrapper = document.querySelector(".wrapper");
const headerContainer = document.querySelector(".header-container");
const menu = headerContainer.querySelector(".gnb-area");

const SCROLLED_HC = "scrolled";
const COLOR_1 = "#A593E0";
const COLOR_2 = "#E0E3DA";
const COLOR_3 = "#FFFFF3";
const COLOR_4 = "#566270";

function handleScroll(event) {
    if(wrapper.scrollTop === 0) {
        headerContainer.classList.remove(SCROLLED_HC);
    } else {
        headerContainer.classList.add(SCROLLED_HC);
    }
}

function init() {
    wrapper.addEventListener('scroll', handleScroll);
}

init();