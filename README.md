# Prerequisite

- Java JDK 8
- Maven
- Node.js v4.2.0
- MySQL Database
- Spring boot v2.0.3
- Angular CLI v1.7.4


# Database setup

This project is setup with WampServer 3.1.3-64 bit and MySQL version 5.7.21

Execute the 'task-db-dump.sql' file (see 'db' folder) to create the database


# Backend

This project is setup with Spring Boot version 2.0.3-RELEASE

## Running the backend server

Navigate to the main project folder ('TaskListApp-master') and open a CMD or Git Bash

Execute the following command:

mvn spring-boot:run


# Frontend

This project is setup with Angular 5

## Downloading and installing NPM packages

Navigate to the 'frontend' folder inside the main project folder and open a CMD or Git Bash

Execute the following command:

nmp install

## Buiding the frontend project

ng build

This command builds and copies the angular files into the 'src/main/resources/static' folder from the backend project


# Important

Execute the 'ng build' command prior to starting the backend server with the 'mvn spring-boot:run' command


# What happens when the backend server is started

- A .jar file containing the Java & Spring Boot code is deployed to the embedded Tomcat Server
- The compiled angular files are loaded from the 'src/main/resources/static' folder
- The landing page from the angular frontend project is displayed on http://localhost:8080