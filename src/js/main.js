document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".header__burger-btn").addEventListener("click", function() {
    document.querySelector(".header__content").classList.toggle("open");
  });
});
