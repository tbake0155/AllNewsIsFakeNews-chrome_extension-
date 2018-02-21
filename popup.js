
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

var script = 'var str = document.body.innerHTML; var res = str.replace(/news/gi, "fake news"); document.body.innerHTML = res;'

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url)  => {
    document.getElementById('fakeIt').addEventListener('click', () => {
        chrome.tabs.executeScript({
            code: script
        });
    });
  });
});
