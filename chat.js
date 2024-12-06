document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from refreshing the page
  
    const chatInput = document.getElementById('chat-input');
    const userNameInput = document.getElementById('user-name');
    const message = chatInput.value.trim();
    const userName = userNameInput.value.trim();
  
    if (message !== "" && userName !== "") {
      // Create a new message div with the user's name and message
      const chatBox = document.getElementById('chat-box');
      const newMessage = document.createElement('div');
      newMessage.classList.add('chat-message', 'user');
      
      // Format the message with the user's name and message
      newMessage.innerHTML = `<span class="user-name-label">${userName}:</span> ${message}`;
      
      // Add the new message to the chat box
      chatBox.appendChild(newMessage);
  
      // Scroll to the bottom of the chat box to show the latest message
      chatBox.scrollTop = chatBox.scrollHeight;
  
      // Clear the input fields
      chatInput.value = '';
    } else {
      alert("Please enter both your name and a message.");
    }
  });
  