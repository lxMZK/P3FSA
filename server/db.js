import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'postgres',
  password: 'root',
  database: 'p3fsa',
});
