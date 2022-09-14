var tbl1=["en-GB","ar-SA","es-ES","fr-FR","it-IT","de-DE","ru-RU","hi-IN","tr-TR"];
var tbl2=["English","Arabic","Spanish","French","Italian","German","Russian","Hindi","Turkish"];
var area1=document.getElementById("area1");
var area2=document.getElementById("area2");
var btn1=document.getElementById("btn1");
var img=document.querySelector("img");
var sout=document.getElementById("sout");
var sout2=document.getElementById("sout2");
var copyfrom=document.getElementById("copyfrom");
var copyto=document.getElementById("copyto");
console.log(countries.length);


for (const property in countries) {
    console.log(`${property}: ${countries[property]}`);
  }




var txttrans="";
function options(opt,clas) {

        for (const property in countries) {
            console.log(`${property}: ${countries[property]}`);
            let select=document.createElement("option");
            select.value=property;
        select.innerText=countries[property];
        select.setAttribute("class", clas);
        opt.appendChild(select); 
          }
       
}
function selected(select,selectted) {
    var selectopt=document.getElementsByClassName(select);
    for (let i = 0; i < selectopt.length; i++) {
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

if (area1.value) {
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
}
});

sout.addEventListener("click",function(){
let utterance;
utterance =new SpeechSynthesisUtterance(area1.value);
  speechSynthesis.speak(utterance);
});

sout2.addEventListener("click",function(){
    let utterance;
    utterance =new SpeechSynthesisUtterance(area2.value);
      speechSynthesis.speak(utterance);
    });

    copyfrom.addEventListener("click",function(){
        navigator.clipboard.writeText(area1.value);
    });
    copyto.addEventListener("click",function(){
        navigator.clipboard.writeText(area2.value);
    });
