document.querySelectorAll(".accordion-item").forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active")
  })
});