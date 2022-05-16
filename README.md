# Landing Page Project

## Description:
landing page built in basic html,css and JavaScript.

### Author:
Naglaa Mohammed Mohammed Hamed


### Techs:
1. Html: built the basic index page.
2. Css: style the page.
3. JS: built the navigation menu and add active class for section and add active class for link element

### Websites used in this project
1. My Udacity Professional track classroom.
2. Udacity Tutors
3. W3Schools.com (scrollIntoView).

### OverView on built and function in JS
1. navBarMenu()
   - I used createElement for create li and a 
   - I used data nav in section to get to Section Name
   - I added Attributes for link (href,class,sectionName)
   - I append link
   - I append li for navbar__list
   - I add this Event when press on the link it will go to this section
2. menuActiveClass()
   - i used sections that it is decleared in the beginning file
   - I used getBoundingClientRect() function for specifing the section Top
   - I declare activeClass by using getElementsByClassName() function  for class "your-active-class"
   - it will delete Active class from old then add this class in now section
   - when you scroll by mouse between sections will change active class for li 
   - I declare linkActive by using getElementsByClassName() function for class "active"
   - I declare activeLinks to select all a in navbar__list by using  getElementById() and querySelectorAll() functions
   - I update class name by active 
3. activeLinksClass()
   - for add class "active" for <a> element when click on <a> not scroll
   - I declare linkActive by using getElementsByClassName() function for class "active"
   - I declare activeLinks to select all a in navbar__list by using  getElementById() and querySelectorAll() functions
   - I update class name by active 

### Css File
  - I add meedia section for mobile case, it will make the menu is flex
  - I add style for <a> element active class.

## Note:
  - I update code to correct the console error,the secId and secPlace out the click event
  - in 28/1/20222 I update declaring variable var into let in (for loops and declare
                                             let actClass = document.getElementsByClassName("your-active-class");)
  - I use Prettier to  format Code
  
### Thank you, I hope I covered all that is wanted
### Good Luck.
