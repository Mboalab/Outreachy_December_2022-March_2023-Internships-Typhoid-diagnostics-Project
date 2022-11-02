### Contribution towards task-2

## Changes implemented (to implement);

**Project structure**
Changed the project structure for easy readeability and follow up.

-node_modules
    -all dependencies
-public
    -index.html
    -favIcon
-src
    -components
        -dist
            -ccs
                -all compiled css
        -images
            -all images to be used
        -pages
            -About
                -About.jsx
                -About.scss
            -Blogs
                -Blogs.jsx
                -Blogs.scss
            -Bot
                -Bot.jsx
                -Bot.scss
            -Comments
                -Comments.jsx
                -Comments.scss
            -ContactUs
                -ContactUs.jsx
                -ContactUs.scss
            -Data-Loading
                -CommentsCard.jsx
                -CommentsCard.scss
            -Footer
                -Footer.jsx
                -Footer.scss
            -Home
                -Home.jsx
                -Home.scss
            -Login
                -Login.jsx
                -Login.scss
            -Navbar
                -Navbar.jsx
                -Navbar.scss
            -Page404
                -Page404.jsx
                -Page404.scss
            -Register
                -Register.jsx
                -Register.scss
            -Services
                -Services.jsx
                -Services.scss
            -Terms
                -Terms.jsx
                -Terms.scss
    -App.css
    -App.js
    -index.js
    -index.css
    -reportWebvitals.js
-.gitignore
-package.json
-ReadMe.md
-yarn.lock

 **Implementation so far**

I have redesigned the navbar by adding the top and horizontal navigation bars to fit the new design.
The horizontal navigation handles internal navigations i.e, navigations that are related to the web, like home, login, regiter. 
The vertical navigation handles navigations that are external like, helplines, Forums. I also added some internal links like contact us just to ease it access
These bars are fixed for easy accessiblity and navigation throughout the website. 
Due to some technical issues I got earlier with my machine I have only managed to implement this navigation
as of now (01/11/2022). 

I made a PR for the above [here #27](https://github.com/ps-19/Typhoid-screener-App/pull/27)