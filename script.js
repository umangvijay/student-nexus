document.addEventListener('DOMContentLoaded', () => {
    const carouselSlides = document.getElementById('carouselSlides');
    const prevSlide = document.getElementById('prevSlide');
    const nextSlide = document.getElementById('nextSlide');
  
    let currentIndex = 0;
    const slides = carouselSlides.children;
    const totalSlides = slides.length;
  
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselSlides.style.transform = `translateX(${offset}%)`;
    }
  
    prevSlide.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
      } else {
        currentIndex = totalSlides - 1;
      }
      updateCarousel();
    });
  
    nextSlide.addEventListener('click', () => {
      if (currentIndex < totalSlides - 1) {
        currentIndex += 1;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });
  });
  