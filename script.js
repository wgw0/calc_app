// Get references to the input field and buttons
const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleInput(button.innerText);
  });
});

// Handle user input
function handleInput(value) {
  switch(value) {
    case 'C':
      clearInput();
      break;
    case '=':
      calculate();
      break;
    default:
      addToInput(value);
  }
}

// Add a value to the input field
function addToInput(value) {
  console.log(value);
  input.value += value;
}

// Clear the input field
function clearInput() {
  input.value = '';
}

// Calculate the result of the input expression
function calculate() {
  try {
    const result = eval(input.value);
    input.value = result;
  } catch(e) {
    alert('Error: ' + e.message);
    clearInput();
  }
}