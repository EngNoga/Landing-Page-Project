/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// select all sections in page
const sections = document.querySelectorAll("section");
// build the nav
function navBarMenu() {
  /* I used createElement for create li and a
   * I used data nav in section to get to Section Name
   * I added Attributes for link (href,class,sectionName)
   * I append link
   * I append li for navbar__list*/
  for (let i = 0; i < sections.length; i++) {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    const secName = sections[i].getAttribute("data-nav");
    anchor.setAttribute("href", "#section" + (i + 1));
    anchor.setAttribute("class", "menu__link");
    anchor.innerHTML = secName;
    li.appendChild(anchor);
    document.getElementById("navbar__list").appendChild(li);

    //I add this Event when press on the link it will go to this section
    //I update code to correct the console error,the secId and secPlace out the click event
    const secId = document.getElementById("section" + (i + 1));
    const secPlace = secId.offsetTop;
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      secId.scrollIntoView({ behavior: "smooth" });
    });
  }
}
//window.addEventListener('load',navBarMenu);

window.addEventListener("DOMContentLoaded", navBarMenu);

//-----------------------------------------------------------------------------

// Add class 'active' to section when near top of viewport

function menuActiveClass() {
  /*i used sections that it is declared above
   * I used getBoundingClientRect() function for specifying the section Top
   * I declare activeClass by using getElementsByClassName() function  for class "your-active-class"
   * it will delete Active class from old then add this class in now section*/

  for (let i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].getBoundingClientRect().top;
    if (sectionTop >= 0 && sectionTop <= 300) {
      // update let instead of var
      let actClass = document.getElementsByClassName("your-active-class");
      actClass[0].className = actClass[0].className.replace(
        "your-active-class",
        ""
      );
      sections[i].className += "your-active-class";

      /*this part, for when you scroll by mouse between sections will change active class for li 
       * I declare linkActive by using getElementsByClassName() function for class "active"
       * I declare activeLinks to select all a in navbar__list by using  getElementById() and querySelectorAll() functions
       * I update class name by active */
      const linkActive = document.getElementsByClassName("active");
      if (linkActive.length > 0) {
        linkActive[0].className = linkActive[0].className.replace(
          " active",
          ""
        );
      }
      const activeLinks = document
        .getElementById("navbar__list")
        .querySelectorAll("a");
      activeLinks[i].className += " active";
    }
  }
}
window.addEventListener("scroll", menuActiveClass);

//---------------------------------------------------------------

/*this part,for add class "active" for <a> element when click on <a> not scroll
 * I declare linkActive by using getElementsByClassName() function for class "active"
 * I declare activeLinks to select all a in navbar__list by using  getElementById() and querySelectorAll() functions
 * I update class name by active */
function activeLinksClass() {
  const activeLinks = document
    .getElementById("navbar__list")
    .querySelectorAll("a");

  for (let i = 0; i < activeLinks.length; i++) {
    activeLinks[i].addEventListener("click", function () {
      const anchorActive = document.getElementsByClassName("active");
      if (anchorActive.length > 0) {
        anchorActive[0].className = anchorActive[0].className.replace(
          " active",
          ""
        );
      }
      this.className += " active";
    });
  }
}

window.addEventListener("scroll", activeLinksClass);
//---------------

/**
 * End Main Functions
 * Begin Events
 *
 */
// Scroll to anchor ID using scrollTO event

// Build menu

// Scroll to section on link click

// Set sections as active
