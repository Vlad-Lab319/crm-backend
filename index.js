import express from "express";
import routes from "./src/routes/crmRoutes.js";
import mongoose from "mongoose";
import bodyParser from 'body-parser';


const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRM', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
  res.send(`Node and express servers are running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});