chrome.runtime.onInstalled.addListener(function() {

});

chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("in chrome.browseraction.onclicked");
    // for the x tab, inject the "inject.js" file & execute it
    // chrome.tabs.executeScript(tab.ib, {
    //     file: 'inject.js'
    // });
});
