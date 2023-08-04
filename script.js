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

// image slider forn companies logo


let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const imageWidth = images[0].clientWidth;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.clientX;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();

  const x = e.clientX;
  const dragDistance = x - startPosition;

  slider.style.transform = `translateX(${currentTranslate + dragDistance}px)`;
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  currentTranslate += e.clientX - startPosition;
  checkBoundaries();
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
  currentTranslate += e.clientX - startPosition;
  checkBoundaries();
});

function checkBoundaries() {
  const maxTranslate = -(images.length - 1) * imageWidth;
  if (currentTranslate > 0) {
    currentTranslate = 0;
  } else if (currentTranslate < maxTranslate) {
    currentTranslate = maxTranslate;
  }
}

/*previous & next buttons*/

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', () => {
  currentTranslate += imageWidth;
  checkBoundaries();
  slider.style.transform = `translateX(${currentTranslate}px)`;
});

nextButton.addEventListener('click', () => {
  currentTranslate -= imageWidth;
  checkBoundaries();
  slider.style.transform = `translateX(${currentTranslate}px)`;
});

