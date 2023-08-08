chrome.browserAction.onClicked.addListener(function(tab){
    const urls = ["https://sliding.toys/mystic-square/8-puzzle/daily/","https://paint.toys/"]
    let newUrl = urls[Math.floor(Math.random()*urls.length)]
    chrome.tabs.create({ url:newUrl });
});
