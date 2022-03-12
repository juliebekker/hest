
var nav = document.getElementById('nav');
  window.onscroll = function () {

    if(window.pageYOffset > 100) {

    nav.style.position = "fixed";
    nav.style.bottom = 0;

  }else {
    box.style.position = "absoulte";
    box.style.bottom = 100;
  }
  }
