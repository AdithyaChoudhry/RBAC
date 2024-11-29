Role-Based-Access-Control UI

Hi, I’m Adithya Choudhry. I am a software developer with hands-on experience in software development, particularly in web development using SQL Server and .NET Web API. I am also interested in creating web applications.
I have developed a role-based access control UI using the MERN stack (MongoDB, Express, React, Node.js). In this application, administrators can view and edit all users.
I have deployed the application, but there are some technical issues that I am currently working to resolve. 

If you would like to see the partly functional application, you can access it here

https://majestic-cranachan-153975.netlify.app/

Initial Requirements
1.React
2.NodeJS
3.ExpressJS
4.MySql + Xampp
5.VS code

Steps to Run the Application

1.Clone The Git repository
2.open the folder
       1.Select the folder Backend and open in VS Code and use this command to install the dependencies 

Command1:npm install
Command2: npm init -y
Command3: node install-dependencies.js

For Password-Hashing I have used argon 2 
install argon2 separately

Command1: pip install argon2==0.41.1

3. For the FrontEnd 

Command1: npx create-react-app frontend --template redux
Command2:npm install
Command3:npm init -y


4.Xampp
    1.You should have Mysql as Prerequisite Install that also . After that start Xampp
    2.Go to phpMyAdmin dashboard and create a Database rbac

5.Insert these values in table for get admin access then only you can login

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES (NULL, 'b0c8606b-fe84-4765-9a8f-fb438e302964', 'Adminn', 'user@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$OINe+Jp9Y2g2j2L5qWvXMg$lK1cGxZqXWWw/UCpTCKi9dIhqlOqwiRk8nulitvkddY', 'admin', '2024-11-26 18:05:21', '2024-11-26 18:05:21')

6.Port number in xampp and database.js should be same

7.create .env file in backend and keep 
APP_PORT = 5000
SESS_SECRET = 2nhsdaesd643n4fmwef75n3rewjewfkj854nefkjdshfkdsjh73nsmfndsk


8.Running the APP
    1.Backend- Nodemon -V
    2.Frontend-  1.npm run build  2.npm start

---------------------------------------------------------------------------------

1.Homepage

I have given only a login page as it was Role Based Access Control Normal Users cannot register themselves
              
--------------------------------------------------------------------------------- 

UI
1.Login
2.Role Based Access control Development Animation
3.Have a Nice Day Text Animation
4.Gradient Background
5.Bouncing Balls in the edges
-----------------------------------------------------------------------------------
Login

If Admin Login He can 
1.Create User
2.Update User
3.Edit User
4.Delete User Also same for the Products  

If Normal user Logs in 

He can see the option of user but access is denied to him
1.He can Create and see products only created by Him
-------------------------------------------------------------------------------------
ADMIN
 
1.Sidebar , Navbar For Users comfortability
2.Dots are Animated and change colors too

UserControl By Admin Only
Products Admin can edit All the Products as well
Edit Products
Adding Product
--------------------------------------------------------------------------------------

USER


If Login As User , they cant see access to other users
only products listed by the particular user is shown 
--------------------------------------------------------------------------------------

I have also Tested the Endpoints as well

 






