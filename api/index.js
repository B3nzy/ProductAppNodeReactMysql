const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const productRouter = require("./src/Routes/product.route");
app.use("/api", productRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
