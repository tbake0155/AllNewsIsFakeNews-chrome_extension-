
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

function fakeIt(doc){
    function fakenews() {
           var res = doc.replace(/news/gi, "fake news");
           doc.body.innerHTML = res;'
    }

    chrome.tabs.executeScript({
        fakenews();
    });
}       

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl(url)  => {
    var doc = document.body.innerHTML;

    fakeIt(doc);

    doc.addEventListener('fakeIt', () => {
        fakeIt(doc);
    });
  });
});
