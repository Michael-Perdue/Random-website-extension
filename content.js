window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("btn").addEventListener("click", randomSite);
});
let urls = []
const url = chrome.runtime.getURL("/data.json");

fetch(url)
    .then((response) => response.json())
    .then((json) => {console.log(json);urls = json.urls;console.log(urls)})
    .catch((error) => console.log("fetch error: ",error))

function randomSite() {
    let newUrl = urls[Math.floor(Math.random()*urls.length)];
    chrome.tabs.create({ url:newUrl });
}
