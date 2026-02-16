import {
  createNewTripService,
  getAllTripsService,
  getTripByIDService,
  updatedTripService,
  deletedTripService,
} from "../services/trip.services.js";

export const createTripController = async (req, res) => {
  try {
    const createtrip = await createNewTripService(req.body);
    if (!createtrip) {
      throw new Error("Trip not found");
    }
    res.status(201).json(createtrip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllTripsController = async (req, res) => {
  try {
    const getAllTrips = await getAllTripsService();
    if (!getAllTrips) {
      throw new Error("Trips not found");
    }
    res.status(200).json(getAllTrips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTripsByIdController = async (req, res) => {
  try {
    const getTripById = await getTripByIDService(req.params.id);
    if (!getTripById) {
      throw new Error("Trip not found");
    }
    res.status(201).json(getTripById);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatedTripController = async (req, res) => {
  try {
    const trip = await updatedTripService(req.params.id, req.body);
    if (!trip) {
      throw new Error("Trip not found");
    }
    res.status(201).json(trip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTripController = async (req, res) => {
  try {
    const deletetrip = await deletedTripService(req.params.id);
    if (!deletetrip) {
      throw new Error("Trip not found");
    }
    res.status(201).json(deletetrip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
