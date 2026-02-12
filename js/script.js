// Navbar scroll effect
window.addEventListener("scroll", function () {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu
var mobileOpen = false;
document.getElementById("mobileToggle").addEventListener("click", function () {
  mobileOpen = !mobileOpen;
  document.getElementById("mobileMenu").classList.toggle("open", mobileOpen);
  this.innerHTML = mobileOpen ? "&#10005;" : "&#9776;";
});

function closeMobile() {
  mobileOpen = false;
  document.getElementById("mobileMenu").classList.remove("open");
  document.getElementById("mobileToggle").innerHTML = "&#9776;";
}

// Fade-in on scroll (Intersection Observer)
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".fade-in").forEach(function (el) {
  observer.observe(el);
});

// Skill bar animation
var skillObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var fill = entry.target.querySelector(".skill-fill");
        if (fill) {
          fill.style.width = fill.getAttribute("data-level") + "%";
        }
      }
    });
  },
  { threshold: 0.3 },
);

document.querySelectorAll(".skill-item").forEach(function (el) {
  skillObserver.observe(el);
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  alert("Pesan terkirim! (demo)");
  e.target.reset();
}
