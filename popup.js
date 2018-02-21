

function fakeIt(){
           var str = document.body.innerHTML;
           var res = str.replace(/news/gi, "fake news");
           document.body.innerHTML = res;
}       
