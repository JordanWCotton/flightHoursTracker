# LogIt
This is project is currently still under development. The front end is built using Angular, with Node.js framework Express handling server logic, and MongoDB with mongoose as the database. This application currently does not hash user passwords upon creation, and as such stores user passwords in plain text on the database. 

The project must be built before running on the development server.

There are two variables for the database username and password, note that you must supply these parameters to access the mongoDB server. It is highly suggested that you create your own at https://mlab.com/welcome/

## Development server
Ensure the project is built using `ng build`. Run `node server.js`, then navigate to `http://localhost:3000/`. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. Use the `--aot` flag for ahead of time compilation via the Angular CLI.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## User Manual:
The application is still very much in development, and as such the currently implemented features are as follows:

+ User can create an account, which is stored on the server. Passwords are currently stored in plaintext on database.
+ User can log in using created account and password.
+ User can add flights to their account.
+ Multi-profile flights are now supported, and can be submitted in groups of three.
+ User can view all logged flights, displayed in chronological order by the flight's date.
+ User can view flights in a specified range, displayed back to the user in chronological order.
+ User can view hour totals for each Duty Symbol, or for each Flight Symbol, as well as overall total hours to date.
+ User can view hour totals from a specific date range.


