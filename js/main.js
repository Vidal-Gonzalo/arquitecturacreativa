ScrollReveal().reveal(".load-hidden", { delay: 500 });

function hidePage() {
  var header = document.getElementById("header");
  var page = document.getElementById("rest-page");
  page.style.visibility = "hidden";
  page.style.visibility = "0";
  header.style.visibility = "hidden";
  header.style.opacity = "0";
}
function showPage() {
  var header = document.getElementById("header");
  var loaderPage = document.getElementById("loader-page");
  var page = document.getElementById("rest-page");
  loaderPage.style.visibility = "hidden";
  loaderPage.style.opacity = "0";
  page.style.visibility = "visible";
  page.style.visibility = "1";
  header.style.visibility = "visible";
  header.style.opacity = "1";
}

hidePage();

setTimeout(function () {
  showPage();
}, 2500);

Array.prototype.forEach.call(
  document.querySelectorAll(".pd-parallax"),
  function (elem) {
    elem.style.backgroundImage =
      "url(" + elem.getAttribute("data-parallax-image") + ")";
  }
);

var owl = document.querySelectorAll(".owl-carousel");
owl.owlCarousel();

document.querySelector(".customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
});

document.querySelector(".customPrevBtn").click(function () {
  owl.trigger("prev.owl.carousel");
});
