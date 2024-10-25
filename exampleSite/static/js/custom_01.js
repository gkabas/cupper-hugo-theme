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


function pdf5() {
    window.open("https://gkabas.netlify.app/files/UI_ADGKK.pdf", "_blank");
    }

function ssrn5() {
    window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4915102", "_blank");
    }

function dis1() {
    window.open("https://gkabas.netlify.app/files/KabasDiscussion_NB2023.pdf", "_blank");
    }

function dis2() {
    window.open("https://gkabas.netlify.app/files/KabasDiscussion_TFS2024.pdf", "_blank");
    }

function dis3() {
    window.open("https://gkabas.netlify.app/files/KabasDiscussion_Bristol2024.pdf", "_blank");
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

let slideIndex = [1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
