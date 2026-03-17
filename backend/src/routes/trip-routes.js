import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  createTripController,
  getAllTripsController,
  getTripsByIdController,
  updatedTripController,
  deleteTripController,
} from "../controllers/trip.controller.js";

const router = express.Router();
router.get("/", authMiddleware, getAllTripsController);
router.get("/:id", authMiddleware, getTripsByIdController);
router.post("/", authMiddleware, createTripController);
router.put("/:id", authMiddleware, updatedTripController);
router.delete("/:id", authMiddleware, deleteTripController);

export default router;
