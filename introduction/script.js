document.querySelectorAll(".nav-btn").forEach(btn => {
  if (window.location.href.includes(btn.getAttribute("href"))) {
    btn.classList.add("active");
  }
});
