let captchaCode;

function generateCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  captchaCode = '';
  for (let i = 0; i < 5; i++) {
    captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('captchaText').innerText = captchaCode;
}

window.onload = function() {
  generateCaptcha();

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    const userCaptcha = document.getElementById('captchaInput').value.trim().toUpperCase();
    if (userCaptcha !== captchaCode) {
      e.preventDefault();
      document.getElementById('captchaError').style.display = 'block';
      generateCaptcha();
    } else {
      document.getElementById('captchaError').style.display = 'none';
      alert('Form submitted successfully!');
    }
  });
};