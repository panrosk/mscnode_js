# Controller-Service-Model Architecture with Express.js and Prisma

## Overview

This repository serves as a learning and implementation space for the Controller-Service-Model (CSM) architecture using Express.js and Prisma as the Object-Relational Mapping (ORM). The example focuses on managing stamp collections from different places.

## Architecture Components

### 1. Controller

The `controllers` directory contains the logic for handling HTTP requests and managing the flow of data between the client and the database. Controllers are responsible for invoking the corresponding services to fulfill specific requests.

### 2. Service

Within the `services` directory, you'll find modules that encapsulate the business logic of the application. Services are called by controllers to perform operations on the data, ensuring separation of concerns.

### 3. Model

The `models` directory houses the data models that define the structure of the stamp collections. Prisma is utilized as the ORM to interact with the underlying database, providing a seamless and type-safe data access layer.

## Database Setup

To facilitate testing, a Dockerfile is included in the `dbdocker` directory. This Dockerfile allows you to spin up a PostgreSQL database instance for running and validating the implemented functions.

To use the Dockerfile, navigate to the `dbdocker` directory and run the following command:

```bash
docker build -t stamp-collection-db .

```
After building the image, you can start a PostgreSQL container with the following

```bash

docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d stamp-collection-db


```
###  Testing
Testing is carried out using Vite, which is chosen as a testing framework over Jest. The tests directory contains test suites to ensure the reliability and correctness of the implemented functionalities.

To run the tests, execute the following command:

```bash

npm run test 

`

To use the repo just clone 

