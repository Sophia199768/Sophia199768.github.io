let time = new Date().getTime();

window.onload = loadTime;

function loadTime() {
    let loadInSeconds = (new Date().getTime() - time) / 1000;
    document.getElementById("load_time").innerHTML = "Load time is <b>" + loadInSeconds + "</b> seconds";
}