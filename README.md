# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

* Angular is required to run this application - you can check with ng version
1. Clone the Repo
2. npm install - to install all dependencies and environment
2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if
you change any of the source files.

## Approach
I have worked with Angular JS, that's why I chose to develope this giphy search application in Angular JS. To implement it smoothly and efficiently.

I started with building the application with creating a skeleton angular project.

### Front End
- Added text box and search box in the html component,
- Used css to give text size and make it on center,
- Displaying all results with the help of unordered list,
- With use of CSS made all elements centered to the screen,
- Injected media screen property for better visibility in different screen sizes
- Used Transform property for enlarging hovered gif.

### Back End
- Taking the search string from front end,
- if its not empty then by using HTTP module of Angular
- Calling the giphy api with generated key and searchString
- Sending the result to front end for displaying
- Handled unexpected error with try-catch block for smooth user experience.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
