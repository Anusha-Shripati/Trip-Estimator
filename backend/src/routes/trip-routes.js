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
// router.use(authMiddleware);
router.get("/", getAllTripsController);
router.get("/:id", getTripsByIdController);
router.post("/", createTripController);
router.put("/:id", updatedTripController);
router.delete("/:id", deleteTripController);

export default router;
