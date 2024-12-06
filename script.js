// Function to show the Thank You popup
function showThankYouPopup() {
    document.getElementById("thankYouPopup").style.display = "block";
  }
  
  // Function to close the Thank You popup
  function closeThankYouPopup() {
    document.getElementById("thankYouPopup").style.display = "none";
  }
  
  // Optional: Automatically trigger popup after successful login or purchase
  // Example: Triggering popup when the user logs in or completes a purchase (you can replace these with your actual logic)
  document.getElementById("loginBtn").onclick = function() {
    // Simulate successful login (this could be based on actual login logic)
    setTimeout(showThankYouPopup, 500); // Display the popup after 500ms (simulate delay)
  };
  
  document.getElementById("purchaseBtn").onclick = function() {
    // Simulate successful purchase (this could be based on actual purchase logic)
    setTimeout(showThankYouPopup, 500); // Display the popup after 500ms (simulate delay)
  };
  