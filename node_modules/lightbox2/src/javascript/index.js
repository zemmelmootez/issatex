
filterSelection("lit")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

$(document).ready(function(){
  $(window).scroll(function(){
      var x = $("#groupe-chiffre").offset();
      var height1 = $("#groupe-chiffre").outerHeight();
      var y = document.documentElement.scrollTop;
      var z = (x.top + height1) - y;
      if(z < $(window).height() && (document.getElementById("effectif-number").innerText!="225")){
        animateValue(document.getElementById("effectif-number"),0,225,2000)   ;
        animateValue(document.getElementById("machine-number"),0,430,2000)   ;

        animateValue(document.getElementById("Marque-number"),0,5,2000)   ;

        animateValue(document.getElementById("size-number"),0,1250,2000)   ;

        return 0;
      
      }
  });
});


function myFunction(){
var x = document.getElementById("top");
if (x.className === "header") {
x.className += " responsive";
} else {
x.className = "header";
}
}


  //animateValue(document.getElementById("effectif-number"),0,225,2000);