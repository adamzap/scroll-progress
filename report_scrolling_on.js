function report_scrolling (e) {
    var area = document.documentElement.scrollHeight - window.innerHeight;

    var percentage = document.body.scrollTop / area * 100;

    if (percentage < 10) {
        percentage = '0' + percentage;
    }

    chrome.extension.sendRequest({percentage: percentage});
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    report_scrolling({});
});

document.addEventListener('scroll', report_scrolling);
