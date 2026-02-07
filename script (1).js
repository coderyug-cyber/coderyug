// ABOUT SECTION TABS
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

var typed = new Typed("#element", {
  strings: ["Web Developer", "UI/UX Designer", "Frontend Engineer"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});


tabLinks.forEach((link) => {
  link.addEventListener("click", () => {

    // remove active class from all
    tabLinks.forEach((item) => item.classList.remove("active-link"));
    tabContents.forEach((content) =>
      content.classList.remove("active-tab")
    );

    // add active to clicked
    link.classList.add("active-link");

    // show correct tab
    const targetTab = link.getAttribute("data-tab");
    document.getElementById(targetTab).classList.add("active-tab");
  });
});

// HAMBURGER MENU
let sidemenu=document.getElementById("sidemenu");
function openmenu(){sidemenu.style.right="0";}
function closemenu(){sidemenu.style.right="-250px";}
