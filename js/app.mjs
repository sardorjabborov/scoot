// app.mjs
import { loadFooter } from "./footer.mjs";

// DOM yuklanganda
document.addEventListener("DOMContentLoaded", () => {
  loadFooter();
  initSignupModal();
  initMap();
});

// ----------------------
// Modal funksiyasi
// ----------------------
function initSignupModal() {
  const openBtn = document.getElementById("openSignup");
  const modal = document.getElementById("signupModal");
  const closeBtn = document.getElementById("closeModal");
  const form = document.getElementById("signupForm");
  const message = document.getElementById("signupMessage");

  if (!openBtn || !modal) return;

  openBtn.addEventListener("click", () => modal.style.display = "block");
  closeBtn.addEventListener("click", () => modal.style.display = "none");

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = {
      name: form.name.value,
      phone: form.phone.value
    };

    try {
      const res = await fetch("https://scoot-backend-1.onrender.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      message.textContent = data.message || "Muvaffaqiyatli yuborildi!";
      form.reset();
    } catch (err) {
      message.textContent = "Xatolik yuz berdi!";
    }
  });
}

// ----------------------
// Leaflet xarita
// ----------------------
function initMap() {
  const map = L.map('map').setView([39.6270, 66.9740], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const locations = [
    { name: "Oqtosh shahri", coords: [39.5220, 66.9610] },
    { name: "Mirbozor bozori", coords: [39.5150, 66.9560] }
  ];

  locations.forEach(loc => {
    L.marker(loc.coords).addTo(map)
      .bindPopup(`<b>${loc.name}</b>`);
  });
}

// ----------------------
// Backend test
// ----------------------
export function helloBackend() {
  console.log("Backend bilan modul aloqasi ishladi!");
}
