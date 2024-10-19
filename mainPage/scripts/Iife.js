let time = new Date().getTime();

window.onload = loadTime;

function loadTime() {
    let loadInSeconds = (new Date().getTime() - time) / 1000;

    let loadTimeElement = document.getElementById("load_time");
    let textNode = document.createTextNode("Load time is ");
    let style = document.createElement("p");
    style.textContent = loadInSeconds;
    loadTimeElement.textContent = "";
    loadTimeElement.appendChild(textNode);
    loadTimeElement.appendChild(style);
}