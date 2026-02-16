import Trip from "../models/trip.model.js";

export const createNewTripService = async (data) => {
  return await Trip.create(data);
};

export const getAllTripsService = async () => {
  return await Trip.find();
};

export const getTripByIDService = async (id) => {
  const trip = await Trip.findById(id);
  if (!trip) {
    throw new Error("Trip not found!");
  }
  return trip;
};

export const updatedTripService = async (id, data) => {
  const updatetrip = await Trip.findByIdAndUpdate(id, data);
  if (!updatetrip) {
    throw new Error("Trip not found!");
  }
  return updatetrip;
};

export const deletedTripService = async (id) => {
  const removetrip = await Trip.findByIdAndDelete(id);
  if (!removetrip) {
    throw new Error("Trip not found!");
  }
  return removetrip;
};
