This is the basic project template that is written following code principles.

`src` - Inside src folder we have all the code for the project. There will be no test folder you should have to create it separtely.

Let's have a look what persent inside the `src` folder.

- `config` - In this folder everything present related to configuration/setup libarary module.For example - setting up `dotenv` file
- `routes` - In this folder, we register routes and corresponding controllers/middlewares.
- `middlewares` - In this folder, we process the interceptors the incoming requests where we write validators/authenticators.
- `controllers` - In this folder, we process the income request and send to business layer logic. Once we recieve the result will structure the api resposne.
- `repositories` - This folder contains all logic interacting with db and all the ORM or raw queries.
- `services` - In this folder, we write the code for business logic and interactions with data present in `repositories`
