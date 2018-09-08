# Frontend

This project is setup with Angular 5

## Buiding the frontend project

nmp install

ng build --prod

The build command builds and copies the angular files into the 'src/main/resources/static' folder from the backend project


# Backend

This project is setup with Spring Boot version 2.0.3-RELEASE

## Running the backend server

For Maven projects: mvn spring-boot:run

## What happens when the backend server is started

- The embedded Tomcat server is started. This contains a .jar file with the Spring boot & Java code
- The angular sourcefiles are loaded from the 'src/main/resources/static' folder
- The landing page from the angular frontend project is displayed
- URL => http://localhost:8080