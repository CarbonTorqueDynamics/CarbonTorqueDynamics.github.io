const links = document.querySelectorAll("nav a");
const sections = {
  "#home": "home",
  "#prototypes": "prototypes",
  "#contact": "contact",
};

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = sections[link.getAttribute("href")];

    document.querySelectorAll("main > div").forEach((div) => {
      div.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
  });
});

function navigateToHome() {
  document.querySelectorAll("main > div").forEach((div) => {
    div.style.display = "none";
  });
  document.getElementById("home").style.display = "block";
}
