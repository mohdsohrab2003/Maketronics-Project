const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());

app.use(bookRoutes);
app.use(productRoutes);

const port = 8080;
app.listen(port, () => {
  console.log(`Server run on http://localhost:${port}`);
});
