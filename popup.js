
function getCurrentTabUrl(callback){

    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, (tabs) => {
        var tab = tabs[0];
        var url = tab.url;
        console.assert(typeof url == 'string', 'tab.url should be a string');
        callback(url);
    });
}

function fakeIt(){
    var script ='
           var str = document.body.innerHTML;
           var res = str.replace(/news/gi, "fake news");
           document.body.innerHTML = res;'

    chrome.tabs.executeScript({
        code: script
    });
}       


