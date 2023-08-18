// Adds a listener button from main to call the randomSite function when the button is clicked
self.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("btn").addEventListener("click", randomSite);
});
let urls = [] // Array to store the possible url sites
const path = chrome.runtime.getURL("/data.json"); // Path to the json file containing the urls
// Fetches the json file with the urls and loads the urls from that file to the urls variable
fetch(path)
    .then((response) => response.json())
    .then((json) => {console.log(json);urls = json.urls;console.log(urls)})
    .catch((error) => console.log("fetch error: ",error))
// Gets a random url from the urls array and opens a new tab for that url
function randomSite() {
    let newUrl = urls[Math.floor(Math.random()*urls.length)];
    chrome.tabs.create({ url:newUrl });
}
