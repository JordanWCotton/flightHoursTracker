# LogIt
This is project is currently still under development. The front end is built using Angular, with Node.js framework Express handling server logic, and MongoDB with mongoose as the database. This application currently does not hash passwords upon user creation, and as such stores user passwords in plain text on the database. This is strictly because the app is still in development, and because authentication via salts/hashes can be added to the existing schema structuring at a later time. 

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

