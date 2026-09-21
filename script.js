// ---------------------------------------------
// Portfolio interactions
// ---------------------------------------------

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Project filters
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const visible = filter === "all" || categories.includes(filter);

      card.classList.toggle("is-hidden", !visible);

      if (!visible && card.classList.contains("is-expanded")) {
        setProjectDetailState(card, false);
      }
    });
  });
});



// Project detail accordion
const detailButtons = document.querySelectorAll(".project-detail-toggle");

function setProjectDetailState(card, expanded) {
  const button = card.querySelector(".project-detail-toggle");
  if (!button) return;

  card.classList.toggle("is-expanded", expanded);
  button.setAttribute("aria-expanded", String(expanded));
}

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    const willOpen = !card.classList.contains("is-expanded");

    // Keep the layout clean: only one project detail is open at a time.
    projectCards.forEach((otherCard) => {
      if (otherCard !== card) setProjectDetailState(otherCard, false);
    });

    setProjectDetailState(card, willOpen);
  });
});

// Smooth anchor offset for the sticky header
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    const target = document.querySelector(id);

    if (!target) return;

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 96;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
});
