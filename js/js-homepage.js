let viewToggleButton = document.getElementById("view-button");
let quickIntros = document.querySelectorAll(
  ".quick-intro-01, .quick-intro-02, .quick-intro-03, .quick-intro-04, .quick-intro-05"
);

let isContentVisible = false;

viewToggleButton.addEventListener("click", function (event) {
  isContentVisible = !isContentVisible;

  quickIntros.forEach((quickIntro) => {
    quickIntro.style.display = isContentVisible ? "block" : "none";
  });
  viewToggleButton.innerHTML = isContentVisible ? "View Less" : "View More";
});
