function report_scrolling (e) {
    var percentage = Math.round(Math.random() * 100);

    chrome.extension.sendRequest({percentage: percentage});
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    report_scrolling({});
});

document.addEventListener('scroll', report_scrolling);
