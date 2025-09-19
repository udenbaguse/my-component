document.querySelectorAll("details").forEach((details) => {
  const summary = details.querySelector("summary");
  const svg = details.querySelector("svg");

  summary.addEventListener("click", (e) => {
    e.preventDefault();

    const isOpen = details.hasAttribute("open");

    if (isOpen) {
      details.classList.add("closing");
      details.classList.remove("open");
      setTimeout(() => {
        details.removeAttribute("open");
        details.classList.remove("closing");
      }, 300);
    } else {
      // Tutup semua accordion lain
      document.querySelectorAll("details[open]").forEach((openDetails) => {
        openDetails.classList.remove("open");
        openDetails.classList.add("closing");
        setTimeout(() => {
          openDetails.removeAttribute("open");
          openDetails.classList.remove("closing");
        }, 300);
      });

      details.setAttribute("open", true);
      details.classList.add("open");
    }
  });
});