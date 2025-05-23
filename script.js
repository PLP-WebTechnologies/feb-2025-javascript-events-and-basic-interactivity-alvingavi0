// 1. Event Handling 🎈

// Get references to our HTML elements
const clickMeBtn = document.getElementById('clickMeBtn');
const hoverDiv = document.getElementById('hoverDiv');
const keyPressOutput = document.getElementById('keyPressOutput');
const doubleClickBtn = document.getElementById('doubleClickBtn');

// Button click ✅
if (clickMeBtn) { // Always good to check if the element exists
    clickMeBtn.addEventListener('click', () => {
        alert('Button was clicked!');
        clickMeBtn.textContent = 'Clicked!'; // Change button text on click
        clickMeBtn.style.backgroundColor = 'lightgreen'; // Change background color
    });
}


// Hover effects ✅
if (hoverDiv) {
    hoverDiv.addEventListener('mouseover', () => {
        hoverDiv.style.backgroundColor = 'lightblue';
        hoverDiv.textContent = 'You are hovering!';
    });

    hoverDiv.addEventListener('mouseout', () => {
        hoverDiv.style.backgroundColor = 'lightgray';
        hoverDiv.textContent = 'Hover Over Me!'; // Reset text
    });
}


// Keypress detection ✅
document.addEventListener('keydown', (event) => {
    keyPressOutput.textContent = `Key pressed: ${event.key}`;
    // You can add more complex logic here, e.g., if (event.key === 'Enter') { ... }
});

// Bonus: A secret action for a double-click 🤫
if (doubleClickBtn) {
    doubleClickBtn.addEventListener('dblclick', () => {
        doubleClickBtn.textContent = 'Secret activated!';
        doubleClickBtn.style.backgroundColor = 'gold';
        console.log('Double click secret!');
    });
}
