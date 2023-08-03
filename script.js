$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    }
    else {
      $('.navbar').removeClass('sticky');
    }
    })
  });

 // Initialize the carousel
$(document).ready(function() {
  $("#myCarousel").carousel();
});