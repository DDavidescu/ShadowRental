// ANIMATIONS 
function isCardsSectionInView() {
  const cardsSection = document.getElementById('cards-section');
  const rect = cardsSection.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to add animation class when cards-section is in viewport
function addAnimationClass() {
  if (isCardsSectionInView()) {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
          setTimeout(() => {
              card.classList.add('animate-slide');
          }, index * 200); // Adjust the delay here (200 milliseconds)
      });
      // Remove event listener once animation is triggered
      document.removeEventListener('scroll', addAnimationClass);
  }
}

// Add event listener for scrolling
document.addEventListener('scroll', addAnimationClass);

// Trigger animation on page load
window.addEventListener('load', addAnimationClass);

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add the active class to elements in the viewport
function activateElements() {
  const locationInfo = document.querySelector('.location-info');
  if (isInViewport(locationInfo)) {
      locationInfo.classList.add('active');
  }
}

// Add event listener for scroll event
window.addEventListener('scroll', activateElements);

// Call the function initially to check if elements are in viewport on page load
activateElements();





// Function to check if the more-info-section is in the viewport
function isMoreInfoSectionInView() {
  const moreInfoSection = document.querySelector('.more-info-section');
  const rect = moreInfoSection.getBoundingClientRect();
  return (
    rect.top <= 0 && // Check if the top of the section is at or above the top of the viewport
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to add animation class when more-info-section is in viewport
function addMoreInfoAnimationClass() {
  if (isMoreInfoSectionInView()) {
    const moreDetailsCards = document.querySelectorAll('.more-details-card');
    moreDetailsCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('active');
      }, index * 200); // Adjust the delay here (200 milliseconds)
    });
    // Remove event listener once animation is triggered
    document.removeEventListener('scroll', addMoreInfoAnimationClass);
  }
}

// Add event listener for scrolling on the document
document.addEventListener('scroll', addMoreInfoAnimationClass);

// Trigger animation on page load
window.addEventListener('load', addMoreInfoAnimationClass);


// NAV BAR
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuButton.addEventListener('click', function () {
      navLinks.classList.toggle('show');
  });

  window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
          navLinks.classList.remove('show');
      }
  });
}); 