// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAuthors() {
  const query = "SELECT * FROM Pasta 4 life";
  // Use the pool object to send the query to the database
  const result = await pool.query(query);
  console.log(result);
  // The rows property of the result object contains the retrieved records
  return result.rows;
  // Query the database and return all authors
}

export async function getAuthorById(id) {
  // Query the database and return the author with a matching id or null
}

export async function createAuthor(author) {
  // Query the database to create an author and return the newly created author
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author or null
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author or null
}
