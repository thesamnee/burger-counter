# burger

## Overview

This app is designed to handle user/front-end requests, and - using controllers, models, a database, and server - return a response.

## The following modules must be installed before using the app:

* express
* express-handlebars
* mysql

## Instructions

* On the left side of the page is a column with new burgers that are ready to be eaten, and on the right side is a column with burgers that have been eaten.

    ### Burgers Ready to be Eaten.
    
    Each burger has 2 buttons next to it - 'Devour it!' & 'Throw it away!'.
    
    * If the user clicks 'Devour it!', the burger will be moved to the right column - Burgers that have been eaten.

    * If the user clicks 'Throw it away!', the burger will be deleted from the list

    ### Burgers that have been eaten.
    
    Each burger has 2 buttons next to it - 'Make Me Another!' & 'Never Make this Again'.
    
    * If the user clicks 'Make Me Another!', the burger will be moved to the left column - Burgers Ready to be Eaten.

    * If the user clicks 'Never Make this Again', the burger will be deleted from the list

* At the bottom of the page, the user can add a new burger to the left column by typing in a name and clicking 'Add Burger'.

## App Logic

### - MySQL Database

Once the server is activated, the app will connect to the MySQL database "burgers.db" via the connection.js file in the config folder.

### - orm.js File

Importing the connection.js file, the orm.js file helps define the SQL syntax to use for different queries.

### - burger.js File

Inside the models folder is the burger.js file which requires the orm file. The ORM will be used to create functions that will interact with the database.

### - burgersController.js File

This file will set up the routes and requires the express module and burger.js files for its database functions. 

### - Handlebars files

The handlebars files will render the HTML for the front end using information retrieved via the get request from the burgersController.js file.

### - Front end buttons/input

* When the user visits the default or home route (/), a get request is made via AJAX, and the results are displayed on the page via the handlebars files.

* When the user clicks on the 'Devour it!' button, the function in the burgers.js file will use AJAX to make a put request to update the 'status' of the burger to true and move the burger to the right column.

* When the user clicks the 'Make me another!' button, the function in the burgers.js file will use AJAX to make a put request to update the 'status' of the burger to false and move the burger to the left column.

* When the user clicks the 'Throw it away' or the 'Never make this again' buttong, the function in the burgers.js file will use AJAX to make a delete request, and remove the burger from the database and front end.

* When the user enters a burger name in the form field and clicks 'Add burger', the function in the burgers.js file will use AJAX to make a post request to add a new burger to the burgers table in the database (with eaten being set automatically to false) and adding the burger to the left column.