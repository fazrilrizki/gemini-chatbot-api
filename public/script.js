const form = document.getElementById('chat-form');
  const userInput = document.getElementById('user-input');
  const chatLog = document.getElementById('chat-box');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = userInput.value;
    userInput.value = ''; // Clear the input field

    // Display user's message in the chat log (optional)
    displayMessage(message, 'user');

    const reply = await sendMessage(message);

    // Display chatbot's reply in the chat log
    displayMessage(reply, 'bot');
  });

  function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = `${sender === 'user' ? 'You: ' : 'Bot: '} ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
  }

  // Include the sendMessage function from above here
  async function sendMessage(userMessage) {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: { userMessage } }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error('Error sending message:', error);
      return "Sorry, I couldn't process your message.";
    }
  }