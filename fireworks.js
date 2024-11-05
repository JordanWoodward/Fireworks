let head = document.getElementsByTagName('HEAD')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://jordanwoodward.github.io/Fireworks/fireworks.css';
head.appendChild(link);

var interval = setInterval(function() {
    var xpathResult = document.evaluate("(//text()[contains(., 'No issues were found matching your search')][1])", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    var node = xpathResult.singleNodeValue;
    if (node == null) {
        var isPyro1 = document.getElementsByClassName('pyro');
        if (isPyro1.length > 0) {
            console.log('Issues found alongside pyro div - removing pyro')
            while(isPyro1[0]) {
                isPyro1[0].parentNode.removeChild(isPyro1[0]);
            }
        }
    }
    else {
        try {
            var isPyro2 = document.getElementsByClassName('pyro');
        } catch (error) {
            // Expected - do nothing
        }
        try {
            if (isPyro2.length > 0) {
                console.log('elements with class "pyro" already exist')
            } else {
                'use strict';
                var newHTML = document.createElement ('div');
                newHTML.innerHTML='<div class="pyro"></div><div class="pyro"></div><div class="pyro"></div><div class="pyro"></div>';
                document.body.appendChild (newHTML);
            }
        } catch (error) {
            // Do nothing
        }
    }
    var xpath_image = '//html/body/div[1]/div[1]/div[2]/div[3]/div[2]/div/div/div[4]/div[1]/div/img';
    var matchingElement = document.evaluate(xpath_image, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    matchingElement.style.content = "url(https://i.imgflip.com/2cdv6d.gif)";
}, 1000);
