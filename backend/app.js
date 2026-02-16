import express from "express";
import tripRoutes from "./src/routes/routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/trips", tripRoutes);

export default app;
