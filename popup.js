document.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("buddy-chat");

  function addMessage(message, sender) {
    const msgContainer = document.createElement("div");
    msgContainer.className = sender === "user" ? "msg-row user" : "msg-row bot";

    const avatar = document.createElement("span");
    avatar.className = "avatar";
    avatar.textContent = sender === "user" ? "🎓" : "🤖";

    const bubble = document.createElement("p");
    bubble.textContent = message;
    bubble.className = sender === "user" ? "user-message" : "bot-message";

    msgContainer.appendChild(avatar);
    msgContainer.appendChild(bubble);

    chatBox.appendChild(msgContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  sendBtn.addEventListener("click", () => {
    const text = userInput.value.trim();
    if (text) {
      addMessage(text, "user");
      userInput.value = "";

      // dummy bot response
      setTimeout(() => {
        addMessage("🤖 I’ll connect to AI soon!", "bot");
      }, 500);
    }
  });

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });
});
