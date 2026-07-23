// Smooth Scroll untuk navigasi antar section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Validasi Form Kontak
document.getElementById("formKontak")?.addEventListener("submit", function(e) {
  e.preventDefault();
  let nama = document.getElementById("nama").value.trim();
  let email = document.getElementById("email").value.trim();
  let pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || email === "" || pesan === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  // Validasi email sederhana
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("Format email tidak valid!");
    return;
  }

  alert("Pesan berhasil dikirim. Terima kasih, Sahabat Meow!");
  this.reset();
});

// Bootstrap Modal (otomatis sudah aktif dengan data-toggle/data-bs-target)
// Tidak perlu JS tambahan, tapi bisa tambahkan log event:
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('shown.bs.modal', () => {
    console.log("Modal terbuka:", modal.id);
  });
});

// Carousel Bootstrap (otomatis aktif dengan data-bs-ride)
// Tambahan: kontrol manual
let carouselElement = document.querySelector('#carouselProduk');
if (carouselElement) {
  let carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000,
    wrap: true
  });
}
