# SETUP and Explanation

Objective:

Create a small login panel.

If login is successful, we show a welcome page with a message:  "welcome" and user-name....

If login is unsuccessful show error right there. 

------------------

We created dummy users' list literal. In realtime, the data is fetched from database.

We used redux concept to manage the state.
But a page refresh would not save the last value in redux. 
And hence we used local-storage to manage persistent data.

local-storage should not be used to store senstive data like password.
In this project it was used to capture and store username, firstname, lastname.

** We can also use  redux-persist and redux-storage middleware packages to persist the state. 

Read more about redux here:

https://redux.js.org/introduction/motivation


------------------------------------------------------

open command prompt as an administrator

go to c: (preferably)
> npm install -g @angular/cli


create and select any folder. say: "angular-projects" in c:

go to angular-projects folder (in command prompt)

Lets create a new project for login with redux.

> ng new login-redux

login-redux folder is created. And a few required files are loaded.


Open visual studio as an administrator
go to login-redux folder

----------------------------------
Open the terminal
Install redux

> npm install @ngrx/core @ngrx/store  --save

create a folder "login" inside app folder
Add the files inside login folder.

We are using redux concept to maintain state.
The related files are login.action and login.reducer

create a "shared" folder inside app folder. Add the files as shown.
** The local-storage stores the values passed to it and retrieves it as required.

create app.state.ts file as in the project
create app-routing.module.ts file as in the project


update the app.component.* files
update app.module file

-----


> ng serve --open



----------------------




# LoginRedux

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

