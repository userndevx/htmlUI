 // JavaScript to handle carousel sliding
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    // Function to change the slide
    function changeSlide() {
      // Hide all slides
      slides.forEach((slide, index) => {
        slide.classList.add('hidden');
      });
      
      // Show the current slide
      slides[currentSlide].classList.remove('hidden');
    }
    
    // Next Slide
    document.getElementById('nextBtn').addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      changeSlide();
    });
    
    // Previous Slide
    document.getElementById('prevBtn').addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      changeSlide();
    });
    
    // Initialize the carousel
    changeSlide();