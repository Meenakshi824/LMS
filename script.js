// Select elements
const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const closeBtn = document.getElementById("closeBtn");

// Open popup
loginBtn.onclick = function() {
  loginPopup.style.display = "flex";
}

// Close popup
closeBtn.onclick = function() {
  loginPopup.style.display = "none";
}

// Close popup when clicking outside
window.onclick = function(event) {
  if (event.target === loginPopup) {
    loginPopup.style.display = "none";
  }
}

