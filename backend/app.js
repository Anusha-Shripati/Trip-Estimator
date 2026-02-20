import express from "express";
import tripRoutes from "./src/routes/routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/trips", tripRoutes);
app.post("/signup", (req, res) => {
  res.send("Successfully signed up");
});
app.post("/signin", (req, res) => {
  res.send("Successfully signed in by user");
});
export default app;
