let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);

});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
  
    // Contact form submission handler
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
      console.log('Contact form found');
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Contact form submitted');
  
        // Show success message for contact form
        var successMessage = document.getElementById('success-message');
        if (successMessage) {
          successMessage.style.display = 'block';
        }
  
        // Optionally, clear the contact form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      });
    } else {
      console.log('Contact form not found');
    }
  
    // Subscription form submission handler
    var subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
      console.log('Subscribe form found');
      subscribeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Subscribe form submitted');
  
        // Show success message for subscription form
        var subscribeSuccessMessage = document.getElementById('subscribe-success-message');
        if (subscribeSuccessMessage) {
          subscribeSuccessMessage.style.display = 'block';
        }
  
        // Optionally, clear the subscribe form field
        document.getElementById('subscribe-email').value = '';
      });
    } else {
      console.log('Subscribe form not found');
    }
  
    // Travel form submission handler
    var travelForm = document.getElementById('travel-form');
    if (travelForm) {
      console.log('Travel form found');
      travelForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Travel form submitted');
  
        // Show success message for travel form
        var travelSuccessMessage = document.getElementById('travel-success-message');
        if (travelSuccessMessage) {
          travelSuccessMessage.style.display = 'block';
        }
  
        // Optionally, clear the travel form fields
        document.getElementById('destination').value = '';
        document.getElementById('travel-date').value = '';
        document.getElementById('tourist-num').value = '';
      });
    } else {
      console.log('Travel form not found');
    }
  });
  