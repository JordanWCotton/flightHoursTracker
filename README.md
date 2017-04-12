# LogIt
This is project is currently still under development. The front end is built using Angular, with Node.js framework Express handling server logic, and MongoDB with mongoose as the database. This application currently does not hash passwords upon user creation, and as such stores user passwords in plain text on the database. This is strictly because the app is still in development, and because authentication via salts/hashes can be added to the existing schema structuring at a later time. 

The project must be built before running on the development server.

There are two variables for the database username and password, note that you must supply these parameters to access the mongoDB server. It is highly suggested that you create your own at https://mlab.com/welcome/

## Development server
Run `node server.js` for a dev server. Navigate to `http://localhost:3000/`. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Current actively used non-Angular specific dependancies:
Via npm:
express
mongoose
mongodb
path
body-parser
ng2-datepicker
bootstrap


