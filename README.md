# Movies app :movie_camera:

This is the final project of the Web dev bootcamp.
The idea is to apply all the knowledge that we acquire in our theoric sessions and applied to build and awesome movie app! 

## Main functionalities
* :white_check_mark:  Display all the movies (Guest view/User view with additional functionalities)
* :white_check_mark:  Display movies by category (Clicking the category name, will display all the movies from that category)
* :white_check_mark:  Search movies by title (No matter if it's a partial or a complete title)
* :white_check_mark:  Registration/Login flow (with email - password verification)
* :white_check_mark:  Display users' favorite movies list
* :white_check_mark:  Users can add/remove movies from their fav list


## Installation

Execute ```npm install``` from inside your app directory to download the dependencies.
In addition, remember that you need to have up and running mongo if you want to test the application locally. 


## API

Method | Endpoint      | Functionality | Private access?
-------| ------------ | ------------- | -------------
POST | /auth/register | Register a user. Email and password are need it (AutoLogin) |  :unlock:
POST | /auth/login | Login with email&password |  :unlock: 
GET | /auth/logout | |  :unlock: 
GET | / | Display all movies |  :unlock: :closed_lock_with_key:  
GET | /categories/:category | Display all movies by category i.e. _Adventure_ | :unlock:
GET | /search | By title | :unlock:
GET | /:id | Get movie by id | :unlock:
GET | /user/favorites | Display all my favorites movies | :closed_lock_with_key: 
POST | /user/favorites | Add movie to my favorites | :closed_lock_with_key:
DELETE | /user/favorites/:id | Delete a movie from my favorite | :closed_lock_with_key:

## Licence

* Marta Bondyra: https://github.com/mbondyra
* Manana Jaworska: https://github.com/Manana101 
* Silvia Mur: https://github.com/pchiwan 
* Jessica Perez: https://github.com/JessicaPG 

