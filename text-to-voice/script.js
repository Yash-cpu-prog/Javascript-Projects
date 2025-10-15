const speakBtn = document.getElementById("speak-btn");
const textInput = document.getElementById("text-input");

speakBtn.addEventListener("click", () => {
  const text = textInput.value.trim();

  if (text === "") {
    alert("⚠️ Please enter some text!");
    return;
  }

  // Create a new SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(text);

  // Optional: set voice, pitch, and rate
  utterance.pitch = 1; // 0 to 2
  utterance.rate = 1;  // 0.1 to 10

  // Speak the text
  window.speechSynthesis.speak(utterance);
});
