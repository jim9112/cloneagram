window.onscroll = function() {stopScroll()};


var header = document.querySelector('.top');

var sticky = header.offsetTop;

function stopScroll() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }