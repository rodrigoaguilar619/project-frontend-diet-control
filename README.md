# ProjectDietControlFrontend
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.

## Project Structure
    - _projectConfig. Project configuration for menu navs, routes and mocks
    - _types. Typescript definitions
    - _tests. Unit tests
    - _ModuleTest. Module to implement components as example of how works
    - config. Configuration of webpack environment and webpack config
    - catalogs. Definition of catalogs, and routes and uris
    - appComponents. Implementation of datatable, forms, modals, and tooltip components
    - appModules. Modules implementation of app
    - utils. Utilities
    - webpack. Webpack configuration

## Available Scripts
In the project directory, you can run:

### `npm run ng-start-dev`
Runs the app in the development mode.\ with webpack integrated into angular configuration
Open [http://localhost:4200/](http://localhost:4200/) to view it in the browser.

### `npm run start-dev`
Runs the app in the development mode with webpack dev server and hot reload.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build-dev`
Build project with webpack in mode development

### `npm run build-prod`
Build project with webpack in mode production

### `npm run sonarqube`
Scan project with sonarqube, token is need. example: nmp run sonarqube -- --token qa_a120c3f701de70e481ab485b871636874081b6c4
