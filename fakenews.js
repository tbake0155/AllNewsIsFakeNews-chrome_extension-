document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('Fake It');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
           var str = document.body.innerHTML;
           var res = str.replace(/news/gi, "fake news");
           document.innerHTML = res;
        });
    }, false);
 }, false);          
