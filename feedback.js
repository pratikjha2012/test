// Handle form submission and feedback display
// Function to show the thank you popup
function showPopup() {
    document.getElementById('thankYouPopup').style.display = 'block';
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('thankYouPopup').style.display = 'none';
  }
  
  // Handle form submission via AJAX (without page refresh)
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    const formData = new FormData(this); // Get the form data
  
    // Send the data to the server via Fetch (AJAX)
    fetch('submit_form.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        showPopup(); // Show the popup if submission is successful
      } else {
        alert('Error: ' + data.message); // Show error message if something goes wrong
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  