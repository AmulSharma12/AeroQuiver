This is the basic project template that is written following code principles.

`src` -> Inside src folder we have all the code for the project. There will be no test folder you should have to create it separtely.

Let's have a look what persent inside the `src` folder.

- `config` -> In this folder everything present related to configuration/setup libarary module.For example - setting up `dotenv` file
- `routes` -> In this folder, we register routes and corresponding controllers/middlewares.
- `middlewares` -> In this folder, we process the interceptors the incoming requests where we write validators/authenticators.
- `controllers` -> In this folder, we process the income request and send to business layer logic. Once we recieve the result will structure the api resposne.
- `repositories` -> This folder contains all logic interacting with db and all the ORM or raw queries.
- `services` -> In this folder, we write the code for business logic and interactions with data present in `repositories`

### Setting up database stuff

- Make sure to create `config.json` inside `src/config` folder
- `config.json` -> contains the information related to the database setup related to different environments for e.g. development, test, production etc. Make sure to provide username and password with correct host for e.g. in dev environment we are going to use the local host i.e. `127.0.0.1` with correct dialect means the database you are going to use in my case i.e. `mysql`

- First step is to run this command
```
  npm install
```

- go inside the `src/` folder and run this command
- this will provide you `migrations` andd `seeders` folder along witth `src/config/config.json` file.

```
  npx sequelize init
```

- To run the project
```
  npm run dev
```
