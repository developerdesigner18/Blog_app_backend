const PORT = process.env.PORT || 5000;
const dbConnection = require("./dbConnector");

const app = require("./app");
require("dotenv").config();

dbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
