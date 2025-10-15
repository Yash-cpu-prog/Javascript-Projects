const input = document.getElementById("qr-input");
const btn = document.getElementById("generate-btn");
const qrImage = document.getElementById("qr-image");

btn.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") {
    alert("⚠️ Please enter some text or URL!");
    return;
  }

  // Use QRCode.js to generate QR
  QRCode.toDataURL(text, { width: 200, margin: 2 }, (err, url) => {
    if (err) {
      console.error(err);
      alert("Something went wrong generating the QR code.");
      return;
    }
    qrImage.src = url;
  });
});
