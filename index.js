// import 'bulma/css/bulma.css'

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