const mysql = require("mysql");

export const connectDB = (query) => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  connection.connect();

  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    return results;
  });

  connection.end();
};
