const { knex } = require("knex");
const config = require("../knexfile");

require("dotenv").config();

/**
 * Helper function which creates the database which may or may not exists
 */
async function createDB() {
  console.log("Creating database if it doesn't exist...");
  // if we leave this in then knex will try to make a connection to this database which may not exist
  delete config.connection.database;
  const dbClient = knex(config);
  try {
    // Send raw SQL to the database so we can create the database
    await dbClient.raw(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_DATABASE}\``
    );
  } catch (err) {
    console.log("Could not create database");
    console.error(err);
  } finally {
    console.log("Done!");
    dbClient.destroy();
  }
}

createDB();
