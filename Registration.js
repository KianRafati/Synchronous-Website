// Function to show the pop-up window
function showPopupForm() {
    // Create a pop-up window
    const popup = window.open('', 'Popup Form', 'width=400,height=300');
  
    // HTML content for the pop-up form
    const formContent = `
      <h2>Registration Form</h2>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <br>
        <button type="submit">Submit</button>
      </form>
    `;
  
    // Set the content of the pop-up window to the form
    popup.document.body.innerHTML = formContent;
  
    // Add a listener to handle form submission
    popup.document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault();
      // Get the form data
      const name = popup.document.getElementById('name').value;
      const email = popup.document.getElementById('email').value;
      // You can now process the form data (e.g., send it to your server)
      console.log('Name:', name);
      console.log('Email:', email);
      // Close the pop-up window after form submission (optional)
      popup.close();
    });
  }
  
  // Function to trigger the pop-up window
  function triggerPopup() {
    showPopupForm();
  }
  