document.addEventListener("DOMContentLoaded", () => {
  const scrollToTop = document.getElementById("jump-up");
  if (scrollToTop) {
    scrollToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const projects = document.getElementsByClassName("proj");

  const filters = [
    { btnId: "filterBranding", cls: "branding" },
    { btnId: "filterPublication", cls: "publication" },
    { btnId: "filterAW", cls: "aw" },
    { btnId: "filterPackaging", cls: "packaging" },
    { btnId: "filterDigital", cls: "digital" },
    { btnId: "filterTypeface", cls: "typeface" },
  ];

  let activeFilter = null;

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

  for (let i = 0; i < filters.length; i++) {
    const { btnId, cls } = filters[i];
    const btn = document.getElementById(btnId);
    if (!btn) continue;

    btn.addEventListener("click", () => {
      if (activeFilter === cls) {
        activeFilter = null;
        clearActiveButtons();
        showAllProjects();
        return;
      }

      activeFilter = cls;
      clearActiveButtons();
      btn.classList.add("active");
      applyFilter(cls);
    });
  }

  showAllProjects();

  });

  const info = document.getElementById("info");
  const wideScreen = document.getElementById("wide-screen");
  const ingDesc = document.getElementById("ing-desc");
  const filterSytem = document.getElementById("ing-desc");

  if (info && wideScreen) {
    info.addEventListener("click", () => {
      wideScreen.style.display =
        wideScreen.style.display === "block" ? "none" : "block";
    });
  }
