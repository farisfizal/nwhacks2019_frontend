chrome.runtime.onInstalled.addListener(function() {

});

chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("in chrome.browseraction.onclicked");
    // for the current tab, inject the "inject.js" file & execute it
    // chrome.tabs.executeScript(tab.ib, {
    //     file: 'inject.js'
    // });
});


var searchSummarizeApi = function(word){
    var query = word.selectionText;
    $.ajax({
        url: `https://summarize-services.herokuapp.com/summarize?url=${word.linkUrl}`,
        method: "GET",
        success: function(data) {
            console.log(typeof(this));
            // tippy('a', {'content': data.summary});
            alert(data.summary);
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
