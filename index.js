// import 'bulma/css/bulma.css'

// Toggle Navbar Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});



function toggleThankYouMessage() {
    // get the clock
    var thankYouMessage = document.getElementById('thankYouMessage');

    // get the current value of the clock's display property
    var displaySetting = thankYouMessage.style.display;

    // also get the clock button, so we can change what it says
    var messageButton = document.getElementById('messageButton');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      thankYouMessage.style.display = 'none';
      // change button text
    //   messageButton.innerHTML = 'Show clock';
    }
    else {
      // clock is hidden. show it
      thankYouMessage.style.display = 'block';
      // change button text
    //   messageButton.innerHTML = 'Hide clock';
    }
  }