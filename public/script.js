// ARR Official REST API — script.js

// ─── Popup Welcome ───
window.addEventListener('load', function () {
  const popup = document.getElementById('popup');
  const backdrop = document.getElementById('popup-backdrop');
  setTimeout(() => {
    popup.classList.add('active');
    backdrop.classList.add('active');
  }, 180);
});

document.getElementById('close-popup').addEventListener('click', function () {
  const popup = document.getElementById('popup');
  const backdrop = document.getElementById('popup-backdrop');
  popup.classList.remove('active');
  setTimeout(() => {
    backdrop.classList.remove('active');
  }, 200);
});

// ─── Accordion Toggle ───
function toggleFolder(folderId, buttonEl) {
  const body = document.getElementById(folderId);
  const accordion = buttonEl.closest('.accordion');
  const isOpen = body.classList.contains('open');

  if (isOpen) {
    body.classList.remove('open');
    accordion.classList.remove('open');
  } else {
    body.classList.add('open');
    accordion.classList.add('open');
  }
}

// ─── Clock & Date ───
document.addEventListener('DOMContentLoaded', function () {
  function updateTime() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('jam').textContent = `${h}:${m}:${s}`;
  }

  function updateDate() {
    const now = new Date();
    const d = now.getDate().toString().padStart(2, '0');
    const mo = (now.getMonth() + 1).toString().padStart(2, '0');
    const y = now.getFullYear();
    document.getElementById('tanggal').textContent = `${d}/${mo}/${y}`;
  }

  updateTime();
  updateDate();
  setInterval(updateTime, 1000);
});

// ─── Copy Code ───
document.getElementById('copyButton').addEventListener('click', function () {
  const text = document.getElementById('codeBlock').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('copyPopup');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  }).catch(err => {
    console.error('Gagal menyalin:', err);
  });
});
