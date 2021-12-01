MATH WEBSITE:

    Version: 0.0.1
    
    General: 
This math based website is used for students to study. The following 
features are in alpha stage stage and not yet ready for deployment

    Installation for developers:
Copy the git hub link and clone it into an empty repository. Add a ".env" file
and create a database on heroku(Or another database site). Grab the connection 
string and paste the link into ".env". Once finished move your terminal
into the directory containing the project and run "npm install" in your 
terminal to install dependencies. Finally you can run "nodemon server/server.js"
in your terminal to start the server. **Server Port is set to 4000
Once the server is running go to you browser and type "http://localhost:4000"


    Features:
The home page consist of two tables where users can insert resource math links
or links (created for youtube) to songs. There is also a shuffle button on the
songs table which when clicked will choose a random link and open a new window.
Additionally the home page lists popular math sites.

Calculator page consists of a calculator with all basic operations including:
(addition, subtraction, multiplication, division, squaring, square rooting)
After clicking the equal sign, the equation typed and the result will be printed 
to the left. Refreshing the page will refresh this list.

Equation page consists of two equations in the version. The quadratic formula
equation works with only real roots for now. The pythagorean therom equation 
is functional as long as the user gives valid inputs.
    
    
    Stack:
    HTML
    CSS
    JAVASCRIPT 
    SQL(Heroku)


    CREDIT TO:
Logan Willis(Request Assisstence)
Marcus Bass(File Structure)
Jutt Degueyter (Style)