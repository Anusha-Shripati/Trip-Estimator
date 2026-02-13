import express from "express";
import { connectDB } from "./src/config/database.js";
import api from "./src/routes/routes.js";
const app = express();
const PORT = 3000;
app.use("/api", api);
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Get the connect");
});

app.listen(PORT, () => {
  console.log(`Server is listening on the ${PORT} `);
});
