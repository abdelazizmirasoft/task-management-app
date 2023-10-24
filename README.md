
## About Task Management App (in progress)

This is a full stack app divided into two parts (Backend API using Laravel and Frontend using ReactJS) , in this app:
1. Created DB schema with Task table.
2. Implemented routes for CRUD operations on Task table.
3. Implemented the Authentication system using Laravel-Sanctum
4. Protected CRUD routes to ensure only authenticated users can access them.
5. Implemented Pagination for the list of tasks.
6. Used API versioning
7. Setup ReactJS
8. Implmented the Login/Logout from the Frontend perspective.
9. Ensured that UI is responsive

## Setup

1. Run `composer install` to install all the needed packages
2. Create database and add that name to the `.env` file
3. Run `php artisan migrate:refresh --seed` to create tables and populate some dummy data in tables
1. Run `npm install` to install all project dependencies
2. Run `npm run dev` to start using the app

## Future work
1. View a list of their tasks.
2. Add new tasks.
3. Edit and delete existing tasks.
4. Filter tasks by status
5. Write tests for your API endpoints using PHPUnit.
