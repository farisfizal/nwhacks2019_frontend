chrome.runtime.onInstalled.addListener(function() {

});

chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("in chrome.browseraction.onclicked");
    // for the x tab, inject the "inject.js" file & execute it
    // chrome.tabs.executeScript(tab.ib, {
    //     file: 'inject.js'
    // });
});


var searchSummarizeApi = function(word) {
    var query = word.selectionText;
    // alert(word.linkUrl);
    $.ajax({
        url: `https://summarize-services.herokuapp.com/summarize?url=${word.linkUrl}`,
        method: "GET",
        success: function(data) {
            console.log(typeof(this));
            // tippy('a', {'content': data.summary});
            // alert(data.summary);
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {type: "openModal"});
            });
            console.log('success', data.summary);
        },
        error: function(xhr) {
            console.log('error', xhr);
        }
    });
};

chrome.contextMenus.create({
    id: "thog",
    title: "Summarize this",
    contexts: ["all"],
    onclick: searchSummarizeApi
});
