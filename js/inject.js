function update() {
    $( "a" ).on('mouseenter',
        function() {
            // console.log(this.href);
            console.log("hovering on", this);
            var that = this;
            if(this.getAttribute('data-requested') !== 'true') {
                console.log("data-requested", this.getAttribute('data-requested'));
                $.ajax({
                    url: `https://summarize-services.herokuapp.com/summarize?url=${this.href}`,
                    method: "GET",
                    success: function (data) {
                        that.setAttribute('title', data.summary);
                        that.setAttribute('data-toggle', "tooltip");
                        that.setAttribute('data-requested', "true");
                        console.log("tooltip set", that)
                    },
                    error: function (xhr) {
                        console.log('error', xhr);
                    }
                });
            }
        }
    );
}

update();



// // Select the node that will be observed for mutations
// var targetNode = document.body;
// console.log(targetNode);
//
// // Options for the observer (which mutations to observe)
// var config = {
//     attributes: true,
//     childList: true,
//     subtree: true
// };
//
// // Callback function to execute when mutations are observed
// var callback = function (mutationsList, observer) {
//     mutationsList.forEach(function (i) {
//         if (i.target.tagName === 'A') {
//             console.log("anchor tag changed.");
//             update();
//         }
//     });
// };
//
// // Create an observer instance linked to the callback function
// var observer = new MutationObserver(callback);
//
// // Start observing the target node for configured mutations
// observer.observe(targetNode, config);
//

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    switch (request.type){
        case "openModal":
            alert("modal event!!!");
            break;
    }
});