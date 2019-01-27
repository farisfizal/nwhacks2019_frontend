function update() {
    $("a").hover(function(thisA)
    {
        let reqUrl = this.href;
        console.log("reqUrl");
        let api_key = "b6798d225e8f40e297dcdefaa6245175";
        let api_url = "https://www.summarizebot.com/api/summarize";
        axios.get(api_url, {
            headers: {"Content-Type": "application/json"},
            params: {
                "apiKey": api_key,
                "url": reqUrl,
                "fragments": 15,
                "language": "English",
                "keywords": 10
            }
        })
            .then(function (data) {
                console.log(JSON.stringify(data));
                let tooltipStr = "";
                for(let i = 0; i<data.summary.length; i++){
                    tooltipStr += data.summary[i].sentence + " ";
                }
                console.log(tooltipStr);
                tippy('a', {'content': tooltipStr});
            })
            .catch(function (error) {
                console.log("I hate you");
            })
    });
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

function waitABit() {
    // Hackathon code
    myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
    for (var i = 0; i < 100; i++) {
        i++;
    }
}
