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

//toggle menu / navbar for mobie devices
$('.menu-btn').click(function(){
  $('.navbar .menu').toggleClass('active');
  $('.menu-btn i').toggleClass('active');
});