//  scroll to top
 document.addEventListener("DOMContentLoaded", () => {
    const scrollToTop = document.getElementById("jump-up");
    scrollToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });


// filter system

const projects = document.getElementsByClassName("proj");

 
  const filters = [
    { btnId: "filterBranding", cls: "branding" },
    { btnId: "filterPublication", cls: "publication" },
    { btnId: "filterAW", cls: "aw" },
    { btnId: "filterPackaging", cls: "packaging" },
    { btnId: "filterDigital", cls: "digital" },
    { btnId: "filterTypeface", cls: "typeface" },
  ];

  let activeFilter = null; // currently active class filter

  function showAllProjects() {
    for (let i = 0; i < projects.length; i++) {
      projects[i].style.display = "";
    }
  }

  function applyFilter(className) {
    for (let i = 0; i < projects.length; i++) {
      const proj = projects[i];
      proj.style.display = proj.classList.contains(className) ? "" : "none";
    }
  }

  function clearActiveButtons() {
    for (let i = 0; i < filters.length; i++) {
      const btn = document.getElementById(filters[i].btnId);
      if (btn) btn.classList.remove("active");
    }
  }

  // attach click listeners
  for (let i = 0; i < filters.length; i++) {
    const { btnId, cls } = filters[i];
    const btn = document.getElementById(btnId);
    if (!btn) continue;

    btn.addEventListener("click", () => {
      // clicking the same filter again = reset to ALL
      if (activeFilter === cls) {
        activeFilter = null;
        clearActiveButtons();
        showAllProjects();
        return;
      }

      // set new filter
      activeFilter = cls;
      clearActiveButtons();
      btn.classList.add("active");
      applyFilter(cls);
    });
  }

  // default: show all
  showAllProjects();
});
