function report_scrolling (e) {
    var percentage = Math.round(Math.random() * 100);

    chrome.extension.sendRequest({percentage: percentage});
}

document.addEventListener('scroll', report_scrolling);
