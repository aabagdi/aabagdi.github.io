# Journal
## Link to site, repo and video
https://aabagdi.github.io/
https://github.com/aabagdi/aabagdi.github.io
https://youtu.be/CmUesbOSV_g
## Mar 4 2025
Today, I tried to get the image carousel working. I mainly used the [Bootstrap docs](https://getbootstrap.com/docs/5.3/components/navbar/) to help me figure that out. I decided to use JavaScript to add the image carousel to the site as it felt easiest to me that way. Simply put, I just created an array of objects with fields of project name, project URL, image, and alternative text, and I iterated through that array to add those elements to the carousel. I used code similar to HW3 to add the navbar to the site. In order to fix an accesibility error (alt text for hamburger button in navbar), I used Claude 3.7 to help me fix it. I also added an image carousel using Bootstrap and JavaScript. I have a few accessibility errors but I will address those later.
## Mar 8 2025
Today I fixed the carousel image scaling, updated the bio, and fixed contrast issues and text justification accessibility errors.
## Mar 9 2025
Today I fixed the accesibility errors and I also fixed the carousel to look better. I also added a GitHub button. Thanks to a post on StackOverflow, I was able to embed a PDF of my resume into my HTML. Thanks to a Reddit post, I discovered ezihost.org. which allowed me to host my PDF for free As well, I used EmailJS to handle the form, so that I actually receive emails that visitors want to leave me. I had some bugs regarding email handling, but Claude 3.7 helped me troubleshoot those minor bugs. It turns out the documentation for EmailJS wasn’t updated, but Claude had the updated implementation details. I also added dividers between each page section to give a cleaner look. The last thing I have to work on is the site’s mobile layout.
## Mar 13 2025
Today I fixed the layout of my website on mobile. This I struggled with since CSS isn’t my strong suit, I prefer HTML and JavaScript. However, thanks to Caterina’s help I was able to figure this out and now my website looks good on mobile!
## Sources
* https://getbootstrap.com/docs/5.3/components/carousel/
* https://medium.com/@jyotijingar/how-to-make-dynamic-slider-using-bootstrap-and-js-c4b9fb2f86ee
* https://fontawesome.com/icons/github?f=brands&s=solid
* https://www.w3schools.com/howto/howto_css_dividers.asp
* https://www.emailjs.com/docs/tutorial/creating-contact-form/
* https://stackoverflow.com/questions/61610201/how-to-embed-pdf-file-in-html
* https://ezihost.org/
* A little Claude 3.7 to help me with specific bugs I was having (specifically with PDF handling and email handling.)