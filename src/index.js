import "./style.css";

import loadHomeSection from "./homeSection";
import loadMenuSection from "./menuSection";
import loadContactSection from "./contactSection";

const content = document.querySelector("#content");


const navigator = document.createElement("div");
navigator.classList.add("nav");

const homeTab = document.createElement("button");
homeTab.classList.add("tab", "home", "active");
homeTab.textContent = "Home";

navigator.appendChild(homeTab);

const menuTab = document.createElement("button");
menuTab.classList.add("tab", "menu");
menuTab.textContent = "Menu";

navigator.appendChild(menuTab);

const contactTab = document.createElement("button");
contactTab.classList.add("tab", "contact");
contactTab.textContent = "Contact";

navigator.appendChild(contactTab);

content.appendChild(navigator);


const heading = document.createElement("div");
heading.classList.add("heading");
heading.textContent = "Mock Restaurant";
content.appendChild(heading);


content.appendChild(loadHomeSection());

homeTab.addEventListener("click", () => {
    homeTab.classList.add("active");
    menuTab.classList.remove("active");
    contactTab.classList.remove("active");

    heading.textContent = "Mock Restaurant";
    content.removeChild(content.childNodes[2]);
    content.appendChild(loadHomeSection());
});
menuTab.addEventListener("click", () => {
    homeTab.classList.remove("active");
    menuTab.classList.add("active");
    contactTab.classList.remove("active");

    heading.textContent = "Menu";
    content.removeChild(content.childNodes[2]);
    content.appendChild(loadMenuSection());
});
contactTab.addEventListener("click", () => {
    homeTab.classList.remove("active");
    menuTab.classList.remove("active");
    contactTab.classList.add("active");

    heading.textContent = "Contact";
    content.removeChild(content.childNodes[2]);
    content.appendChild(loadContactSection());
});