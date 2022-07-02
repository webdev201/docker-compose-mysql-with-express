# docker-compose-mysql-with-express

Docker is an excellent tool that can be used to really speed up development. This repository shows an example of how to integrate docker-compose with an express backend to quickly set up a working MySQL database that you can start using right away. You can read the full article at the following link: https://webdev201.com/articles/use-docker-to-quickly-setup-my-sql

## Setup

To run the project create a .env file in the root directory with the following variables:

```bash
PORT=4000
DB_HOST=localhost
DB_CLIENT=mysql2
DB_USER=root
DB_PASSWORD=password
DB_DATABASE=prestart
DB_PORT=3306
```

Next install the depdendies with the following command:

```bash
npm install
```

After the dependencies have been installed you can start the MySQL container by running the command `docker-compose up`. Once the database is setup you can start the backend by running the command:

```bash
npm start
```
