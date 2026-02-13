import express from "express";
import {
  createTripController,
  getAllTripsController,
  getTripsByIdController,
  updatedTripController,
  deleteTripController,
} from "../controllers/trip.controller.js";

const api = express.Router();

api.get("/api/trips/list", getAllTripsController);
api.get("/trips/:id", getTripsByIdController);
api.post("/trips", createTripController);
api.put("/trips/:id", updatedTripController);
api.delete("/trips/:id", deleteTripController);

export default api;
