//OurServices

let navItem = document.querySelectorAll(".services_navbar-item");

navItem.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    let currentItem = document.querySelector(
      `.services_info-block[data-list-block="${item.dataset.list}"]`
    );

    document
      .querySelector(".services_info-block.active-services_block")
      .classList.remove("active-services_block");
    document
      .querySelector(".services_navbar-item.active_services-navbar")
      .classList.remove("active_services-navbar");

    currentItem.classList.add("active-services_block");
    item.classList.add("active_services-navbar");
  });
});

// works

let worksItem = document.querySelectorAll(".works_navbar-item");
let button = document.querySelector(".works_button");
let worksImg = document.querySelectorAll(".works_collection-item");
let childImg = document.querySelectorAll(".works_collection-item>img");

worksItem.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(".works_navbar-item.active_works_navbar")
      .classList.remove("active_works_navbar");
    item.classList.add("active_works_navbar");
  });
});

$(document).ready(function () {
  $("a").click(function (e) {
    e.preventDefault();
  });
  $.each(worksImg, function (index, image) {
    let category = $(image).data("img");
    console.log(category);
    $(".works_navbar-item").click(function () {
      let filter = $(this).data("name");
      if (filter == "All") {
        $(".works_collection-item").show(1000);
        $(".works_collection-item.hide>img").addClass("hidden");
      }
      if (filter !== category) {
        $(image).hide();
      } else {
        $(image).show(1000);
        $(".works_collection-item.hide>img").removeClass("hidden");
      }
    });
  });
});

button.addEventListener("click", function () {
  childImg.forEach(function (e) {
    e.classList.remove("hidden");
    e.classList.remove("hide");
    e.style.display = "block";
  });
  button.remove();
});

let hoverBlock = document.querySelector(".works_collection-item_create");
console.log(hoverBlock);
worksImg.forEach(function (img) {
  img.addEventListener("mouseenter", function (elem) {
    hoverBlock.style.display = "block";
    img.prepend(hoverBlock);
  });
  img.addEventListener("mouseleave", function (elem) {
    hoverBlock.style.display = "none";
  });
});
// slider

$(document).ready(function () {
  $(".slider_main").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider_buttom",
    cssEase: "linear",
  });
  $(".slider_buttom").slick({
    centerPadding: "23px",
    cssEase: "linear",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    asNavFor: ".slider_main",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
  });

  //Gallery

  // $(".grid").masonry({
  //   itemSelector: ".grid-item",
  //   columnWidth: 150,
  //   percentPosition: true,
  //   gutter: 20,
  // });
  // $(".section").masonry({
  //   itemSelector: ".section-item",
  //   columnWidth: 90,
  //   percentPosition: true,
  //   gutter: 3,
  // });
});
