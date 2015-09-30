# tic-tac-toe
Create the following bits of functionality for your application:

Registration page (/register perhaps?) where a user can enter a username and password
An HTML input tag with ~type=”password”~ can be used for the password field in the page
Write a GET handler to render that page
Write a POST function to handle the form from that page
Check to see if the username already exists in the database
Create the user if not, and add their user id to the session
Login page (/login?) where a user can enter a username and password
Write a GET function to render that page
What should the handler do if the user is already logged in?
Write a POST function to handle the form from that page
Load the User model based on the username (and if it isn’t found?)
Verify the password entered in the form against the password in the model
Log the user in if appropriate (/i.e.,/ password match)
Users list page (/users?) that lists all the users
Write a GET handler to render that page
Write a POST handler for /logout that will eliminate the current session and logging out the currently logged in user
What if there is no logged in user?
