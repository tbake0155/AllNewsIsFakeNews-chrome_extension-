document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('Fake It');
    checkButton.addEventListener('click', function() {

           var str = document.body.innerHTML;
           var res = str.replace(/news/gi, "fake news");
           document.body.innerHTML = res;

    }, false);
 }, false);          
