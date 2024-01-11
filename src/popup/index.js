import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('app')

  // Create the main element
  const mainElement = document.createElement('main')
  
  var toggle = document.getElementById('toggle');
  var label = document.querySelector('label[for="toggle"]');
  mainElement.appendChild(toggle);
  mainElement.insertBefore(label, toggle);

  // Append the main element to the page
  appElement.appendChild(mainElement)

  // Add event listener to handle toggle changes
  toggle.addEventListener('change', function() {
    if (toggle.checked) {
      // Toggle is checked (on)
      console.log('Toggle is on');
      // Perform any actions you want when the toggle is on
    } else {
      // Toggle is not checked (off)
      console.log('Toggle is off');
      // Perform any actions you want when the toggle is off
    }
  });
})
