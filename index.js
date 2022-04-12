import express from "express";

// import

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send(`Node and express servers are running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});