var nav_bg = document.getElementById("page-nav");
var nav_items = document.getElementsByClassName("nav-items")[0];
var hamburger = document.getElementById("hamburger");

var dropdown = document.getElementsByClassName("menu-item-has-children")[0];
var drop_ul = document.getElementsByClassName("sub-menu")[0];
var drop_a = document.querySelector(".menu-item-has-children > a");

var slider = document.querySelector(".slider");
if (slider) {
  var slider_height = slider.offsetHeight;
}

var footer_items = document.querySelector(".footer-top");

var footer_logo = document.querySelector(".logo-footer");
var footer_menu = document.querySelector(".footer-menu");

var fl_w = footer_logo.offsetWidth;
var fm_w = footer_menu.offsetWidth;
var footer_items_w = footer_items.offsetWidth;

/*========================================================*/

var each_post = document.querySelectorAll(".each-post");
var blog_items = document.querySelectorAll(".blog-items");
var each_post_w;
var blog_items_w;
var author = document.querySelectorAll(".author");

/*========================================================*/

// preloader
const preload = document.querySelector("#preload");
preload.classList.add("show-preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    preload.classList.remove("show-preloader");
    preload.style.transition = "0.5s";
  }, 1000);
});

(function () {
  hamburger.addEventListener("click", function () {
    this.classList.toggle("open");
    document.body.classList.toggle("noscroll");
    nav_bg.classList.toggle("nav-bg-open");
    nav_items.classList.toggle("nav-items-open");
  });
})();

function resize() {
  if (slider) {
    slider_height = slider.offsetHeight;
  }

  footer_items_w = footer_items.offsetWidth;
  fl_w = footer_logo.offsetWidth;
  fm_w = footer_menu.offsetWidth;

  if ($(window).width() > 1024) {
    nav_bg.classList.remove("nav-bg-open");
    nav_items.classList.remove("nav-items-open");
    hamburger.classList.remove("open");
    drop_a.classList.remove("active-arrow");
  }
  if (fl_w + fm_w > footer_items_w) {
    footer_items.classList.add("f-wrap");
  } else {
    footer_items.classList.remove("f-wrap");
  }

  /*========================================================*/

  for (let i = 0; i < each_post.length; i++) {
    each_post_w = each_post[i].offsetWidth;
    blog_items_w = blog_items[i].offsetWidth;

    if (blog_items_w >= each_post_w) {
      author[i].classList.add("noline");
    } else {
      author[i].classList.remove("noline");
    }
  }

  /*========================================================*/
}

$(document).ready(function () {
  $(window).resize(resize);
  resize();
});

/*=========================dropdown==============================================*/

dropdown.addEventListener("click", function () {
  drop_ul.classList.toggle("dropdown-active");
  drop_a.classList.toggle("active-arrow");
});

/*=========================change navbar backgound==============================================*/

$(window).scroll(function () {
  if ($(window).scrollTop() >= slider_height - 70) {
    $("#front-header").css("background-color", "black");
  } else {
    $("#front-header").css("background-color", "transparent");
  }
});

//----------------------scroll to contact---------------------------
var scroll_contact = document.querySelector("#scroll-to-contact > a");
if (scroll_contact) {
  scroll_contact.addEventListener("click", scroll);

  function scroll() {
    var el = document.getElementsByClassName("contact-front")[0];
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
}

//----------------------thumbnail post overlay---------------------------

var ep = document.querySelectorAll(".each-post");

for (let i = 0; i < ep.length; i++) {
  $(".thumbnail")
    .eq(i)
    .hover(
      function () {
        $(".thumbnail-overlay-text").eq(i).css({
          visibility: "visible",
          opacity: 1,
          transform: "translate(-50%,40%)",
        });
      },
      function () {
        $(".thumbnail-overlay-text").eq(i).css({
          visibility: "hidden",
          opacity: 0,
          transform: "translate(-50%, -40%)",
        });
      }
    );
}

//----------------------WORDPRESS / remove div with .textwidget class---------------------------

jQuery(".textwidget").contents().unwrap();
