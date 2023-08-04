let isDragging = false;
  let startPosition = 0;
  let currentTranslate = 0;

  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  const imageWidth = images[0].clientWidth;

  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.clientX;
    slider.style.transition = 'none'; // Disable transition during dragging
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.clientX;
    const dragDistance = x - startPosition;

    // Using translate3d for hardware acceleration
    slider.style.transform = `translate3d(${currentTranslate + dragDistance}px, 0, 0)`;
  });

  slider.addEventListener('mouseup', () => {
    isDragging = false;
    currentTranslate += e.clientX - startPosition;
    slider.style.transition = 'transform 0.3s ease'; // Restore transition after dragging
    checkBoundaries();
  });

  slider.addEventListener('mouseleave', () => {
    isDragging = false;
    currentTranslate += e.clientX - startPosition;
    slider.style.transition = 'transform 0.3s ease'; // Restore transition after dragging
    checkBoundaries();
  });

  function checkBoundaries() {
    const maxTranslate = -(images.length - 1) * imageWidth;
    if (currentTranslate > 0) {
      currentTranslate = 0;
    } else if (currentTranslate < maxTranslate) {
      currentTranslate = maxTranslate;
    }
    // Update the position after applying the boundaries
    slider.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;
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

