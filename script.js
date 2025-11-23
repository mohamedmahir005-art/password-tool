// Generate Strong Password
document.getElementById("genBtn").addEventListener("click", () => {
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < 12; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("password").value = password;
});

// Breach Checker (Simple Local Check)
document.getElementById("checkBtn").addEventListener("click", () => {
  const commonPasswords = [
    "123456",
    "password",
    "123456789",
    "qwerty",
    "abc123",
    "password1"
  ];

  const userPass = document.getElementById("checkPass").value;
  const result = document.getElementById("result");

  if (userPass === "") {
    result.textContent = "⚠️ Please enter a password!";
    result.style.color = "orange";
  } else if (commonPasswords.includes(userPass)) {
    result.textContent = "❌ Password found in breach list!";
    result.style.color = "red";
  } else {
    result.textContent = "✔️ Safe! Password not found in known breaches.";
    result.style.color = "green";
  }
});
