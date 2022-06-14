# Sequelize Many To Many Association With Integer Ids

- The purpose of this app is to demonstrate that npm run test fails when run on a sequelize model User and a sequelize model Role having a many to many relationship via RoleUser both having integer userId and roleId on sequelize version 6.20.1 whereas the tests execute perfectly if the data type of userId and roleId was UUIDv4 instead on the postgres dialect. 
- Check the User and Role model and their associated controller which use integer userId and roleId columns compared to the other version where they use strings.

![Failed Tests Screenshot](https://imgur.com/KJeyMRk.png)
  
### Run the tests without any container
1. Start a Postgres database server on your machine or in the cloud.
2. Set the following environment variables in your .env file

```
DB_DIALECT=postgres
NODE_ENV=development
POSTGRES_HOST=<address-where-database-running>
POSTGRES_PORT=<port-where-database-running>
POSTGRES_DB=<database-name>
POSTGRES_USER=<username-for-database>
POSTGRES_PASSWORD=<password-to-database>
```

3. Install packages and run tests

```
$ npm install
$ eval $(egrep -v '^#' .env | xargs) npm run test
```

### Run the tests inside a Docker container

Build the docker container and get it up and running. It will run the tests directly inside the Docker and you should see the same result as above

```
$ docker-compose up --build
```
