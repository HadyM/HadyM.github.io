const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 4000);

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav__link");

  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });

  // Animation
  let typed = new Typed(".typing", {
    strings: [
      "Full-Stack Developer",
      "Graphic Designer",
      "Gamer",
      "Anime lover",
      "Chef",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    smartBackspace: true,
    loop: true,
  });
});
