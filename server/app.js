const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Allow cross-origin requests
app.use(cors());

// Connect to Database
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-vllhb.mongodb.net/${process.env.DB_SCHEMA}?retryWrites=true&w=majority`, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log("database connected");
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
app.listen(4000, () => {
  console.log("server started on port 4000");
});