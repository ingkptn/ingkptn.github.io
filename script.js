 document.addEventListener("DOMContentLoaded", () => {
    const scrollToTop = document.getElementById("jump-up");
    scrollToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });