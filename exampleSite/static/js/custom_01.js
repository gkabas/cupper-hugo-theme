const yourCustomFunction01 = (message) => {
  console.log(message);
};

function abs1() {
  var x = document.getElementById("abs1");
  var y = document.getElementById("fig1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
     }
}

function pdf1() {
    window.open("https://gkabas.netlify.app/files/BenincasaKabasOngena.pdf", "_blank");
    }

function ssrn1() {
    window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4075737", "_blank");
    }

function pdf2() {
    window.open("https://gkabas.netlify.app/files/KabasRoszbach2021.pdf", "_blank");
    }

function ssrn2() {
    window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3835232", "_blank");
    }

function pdf3() {
    window.open("https://gkabas.netlify.app/files/ArslanDegerliKabas.pdf", "_blank");
    }

function ssrn3() {
    window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3280437", "_blank");
    }

function pdf4() {
    window.open("https://gkabas.netlify.app/files/DoerrKabasOngena.pdf", "_blank");
    }

function ssrn4() {
    window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3430184", "_blank");
    }

function abs2() {
  var x = document.getElementById("abs2");
  var y = document.getElementById("fig2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
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
   if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
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
   if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
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
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
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
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
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
   if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
   if (y.style.display === "block") {
    y.style.display = "none";
  } else {
   }
}

function fig3() {
  var x = document.getElementById("fig3");
  var y = document.getElementById("abs3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
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
   if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
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
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
   if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}

var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);


function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  
  var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  var dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}    
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow.currentSlideIndex-1].style.display = "block";  
  dots[slideshow.currentSlideIndex-1].className += " active";
}
