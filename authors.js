// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

// Query the database and return all authors
export async function getAuthors() {
  const query = "SELECT * FROM authors";
  // Use the pool object to send the query to the database
  const result = await pool.query(query);
  console.log(result);
  // The rows property of the result object contains the retrieved records
  return result.rows;
}

// Query the database and return the book with a matching id or null
export async function getAuthorById(id) {
  // Define the SQL query to fetch the book with the specified id from the 'books' table
  const queryText = "SELECT * FROM authors WHERE id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  // If a book with the specified id exists, it will be the first element in the rows array
  // If no book exists with the specified id, the rows array will be empty
  return result.rows[0] || null;
}

export async function createAuthor(author) {
  // SQL query
  const queryString = `INSERT INTO AUTHORS (first_name, last_name) 
  VALUES ($1, $2) 
  RETURNING *`;

  // Destructure first_name and last_name from the author object
  const { first_name, last_name } = author;

  // Execute the query with values provided in request
  const result = await pool.query(queryString, [first_name, last_name]);

  // Return the newly inserted author record or null
  return result.rows[0] || null;
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author or null
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author or null
}
