const readline = require('readline');
const keypress = require('keypress');

// Initialize readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Initialize keypress
keypress(process.stdin);

// Define options and initial selection
const options = ['Tutorial', 'Training', 'Easy', 'Hard'];
let selectedOptionIndex = 0;

// Function to render the menu with the selected option highlighted
function renderMenu() {
  console.clear();
  for (let i = 0; i < options.length; i++) {
    if (i === selectedOptionIndex) {
      console.log(`> ${options[i]}`);
    } else {
      console.log(`  ${options[i]}`);
    }
  }
}

// Initial rendering of the menu
renderMenu();

// Handle arrow key presses
process.stdin.on('keypress', (ch, key) => {
  if (key) {
    switch (key.name) {
      case 'up':
        if (selectedOptionIndex > 0) {
          selectedOptionIndex--;
        }
        break;
      case 'down':
        if (selectedOptionIndex < options.length - 1) {
          selectedOptionIndex++;
        }
        break;
      case 'return':
        // Handle the selection (e.g., execute an action based on the selected option)
        console.log(`Selected: ${options[selectedOptionIndex]}`);
        // rl.close();
        // process.stdin.pause();
        break;
    }
    renderMenu();
  }
});

// Enable listening for keypress events
process.stdin.setRawMode(true);
process.stdin.resume();
