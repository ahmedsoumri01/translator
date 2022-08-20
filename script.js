var tbl1=["en-GB","ar-SA","es-ES","fr-FR","it-IT"]
var tbl2=["English","Arabic","Spanish","French","Italian"]
var area1=document.getElementById("area1");
var area2=document.getElementById("area2");
var btn1=document.getElementById("btn1");
var img=document.querySelector("img");
var txttrans="";
function options(opt,clas) {
    for (let i = 0; i < tbl1.length; i++) {
        let select=document.createElement("option");
        select.value=tbl1[i];
        select.innerText=tbl2[i];
        select.setAttribute("class", clas);
        opt.appendChild(select);      
        }
}
function selected(select,selectted) {
    var selectopt=document.getElementsByClassName(select);
for (let i = 0; i < tbl1.length; i++) {
    if (selectopt[i].selected) {
      var selectted=selectopt[i].value;
    }
}

return selectted;
    
}

window.addEventListener("load",function(){
    var reverse=0;
    area1.value="";
    area2.value="";
    options(opt,"translatefrom");
    options(opt2,"translateto");
});

btn1.addEventListener('click',function(){
let translatefrom="";
let translateto="";
    
fetch(`https://api.mymemory.translated.net/get?q=${area1.value}&langpair=${selected("translatefrom",translatefrom)
}|${selected("translateto",translateto)}`)
.then(response => response.json())
.then(response => txttrans=response.responseData.translatedText)
.then(response => console.log(response))
.catch(err => console.error(err));
setInterval(function(){
    area2.value = txttrans;
},200);
    
});