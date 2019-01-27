function update() {
    $("a").hover(
        function () {
            $.ajax({
                url: `https://summarize-service.herokuapp.com/summarize?url=${this.href}`,
                method: "GET",
                data: {
                    a: "a"
                },
                success: function (data) {
                    console.log('success', data)
                },
                error: function (xhr) {
                    console.log('error', xhr);
                }
            });
            tippy('a', {
                'content': 'Thog dont care'
            });
        }
    );
}

update();

// Select the node that will be observed for mutations
var targetNode = document.body;
console.log(targetNode);

// Options for the observer (which mutations to observe)
var config = {
    attributes: true,
    childList: true,
    subtree: true
};

// Callback function to execute when mutations are observed
var callback = function (mutationsList, observer) {
    mutationsList.forEach(function (i) {
        if (i.target.tagName === 'A') {
            console.log("anchor tag changed.");
            update();
        }
    });
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);