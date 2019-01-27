// function update() {
//     $( "a" ).on('mouseenter',
//         function() {
//             // console.log(this.href);
//             console.log("hovering on", this);
//
//             var that = this;
//             if(this.getAttribute('data-requested') !== 'true') {
//                 this.setAttribute('data-requested', "true");
//                 console.log("data-requested", this.getAttribute('data-requested'));
//                 $.ajax({
//                     url: `https://summarize-services.herokuapp.com/summarize?url=${this.href}`,
//                     method: "GET",
//                     success: function (data) {
//                         that.setAttribute('title', data.summary);
//                         that.setAttribute('data-toggle', "tooltip");
//                         console.log("tooltip set", that)
//                     },
//                 error: function (xhr) {
//                     that.setAttribute('title', "There was an error, please try hovering over an article.");
//                     that.setAttribute('data-toggle', "tooltip");
//                     console.log('error', xhr);
//                     }
//                 });
//             }
//         }
//     );
// }
//
// update();
//
//
//
// // // Select the node that will be observed for mutations
// // var targetNode = document.body;
// // console.log(targetNode);
// //
// // // Options for the observer (which mutations to observe)
// // var config = {
// //     attributes: true,
// //     childList: true,
// //     subtree: true
// // };
// //
// // // Callback function to execute when mutations are observed
// // var callback = function (mutationsList, observer) {
// //     mutationsList.forEach(function (i) {
// //         if (i.target.tagName === 'A') {
// //             console.log("anchor tag changed.");
// //             update();
// //         }
// //     });
// // };
// //
// // // Create an observer instance linked to the callback function
// // var observer = new MutationObserver(callback);
// //
// // // Start observing the target node for configured mutations
// // observer.observe(targetNode, config);
//
//
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     switch (request.type){
//         case "openModal":
//             alert("modal event!!!");
//             break;
//     }
// });

$(document).ready(function() {
    var tabURL;
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {
        tabURL = tabs[0].url;
        console.log("URL from get-url.js", tabURL);
        $.ajax({
            url: `https://summarize-services.herokuapp.com/summarize?url=${tabURL}`,
            method: "GET",
            success: function (data) {
                var fake_percentage = data.fake_confidence * 100
                document.getElementById("title").innerHTML = data.summary;
                document.getElementById("type").innerHTML = 'Type = ' + data.fake_type;
                document.getElementById("validity").innerHTML = 'Confidence = ' + fake_percentage + '%';
                console.log("tooltip set", data.summary)
            },
            error: function (xhr) {
                document.getElementById("title").innerHTML = xhr.summary;
                console.log('error', xhr);
            }
        });
    });

});
