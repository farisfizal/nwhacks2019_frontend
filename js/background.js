chrome.runtime.onInstalled.addListener(function() {
    // add an action here
});

chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("in chrome.browseraction.onclicked")
    // for the current tab, inject the "inject.js" file & execute it
    chrome.tabs.executeScript(tab.ib, {
        file: 'inject.js'
    });
});