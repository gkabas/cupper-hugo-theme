const yourCustomFunction01 = (message) => {
  console.log(message);
};

function abs1() {
  var x = document.getElementById("abs1");
  var y = document.getElementById("fig1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
     }
}

function abs2() {
  var x = document.getElementById("abs2");
  var y = document.getElementById("fig2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}

function abs3() {
  var x = document.getElementById("abs3");
  var y = document.getElementById("fig3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}


function abs4() {
  var x = document.getElementById("abs4");
  var y = document.getElementById("fig4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}


function abs5() {
  var x = document.getElementById("abs5");
  var y = document.getElementById("fig5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}

function fig1() {
  var x = document.getElementById("fig1");
  var y = document.getElementById("abs1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}

function fig2() {
  var x = document.getElementById("fig2");
  var y = document.getElementById("abs2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   if (y.style.display === "block") {
    y.style.display = "none";
  } else {
   }
}

function fig3() {
  var x = document.getElementById("fig3");
  var y = document.getElementById("abs3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}
function fig4() {
  var x = document.getElementById("fig4");
  var y = document.getElementById("abs4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}
function fig5() {
  var x = document.getElementById("fig5");
  var y = document.getElementById("abs5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

