$(document).ready(function() {
    var tabURL;
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {
        tabURL = tabs[0].url;
        console.log("URL from get-url.js", tabURL);
        $.ajax({
            url: `https://summarize-services.herokuapp.com/summarize?url=${tabURL}`,
            method: "GET",
            success: function (data) {
                var fake_percentage = Math.floor(data.fake_confidence * 100);
                document.getElementById("title").innerHTML = data.summary;
                document.getElementById("type").innerHTML = 'Type = ' + data.fake_type;
                document.getElementById("validity").innerHTML = 'Confidence = ' + fake_percentage + '%';
            },
            error: function (xhr) {
                document.getElementById("title").innerHTML = "Sorry, this page could not be summarized.";
                console.log('error', xhr);
            }
        });
    });

});
