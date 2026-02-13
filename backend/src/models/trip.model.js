import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    tripName: {
      type: String,
      required: true,
      trim: true,
    },
    destination: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    persons: {
      type: Number,
      required: true,
      min: 1,
    },
    fixedExpense: {
      foodExpense: {
        type: Number,
        required: true,
        default: 0,
      },
      travelExpense: {
        type: Number,
        required: true,
        default: 0,
      },
      stayExpense: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    otherExpense: [
      {
        otherExpenseName: {
          type: String,
          required: true,
          trim: true,
        },
        otherExpenses: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Trip", tripSchema);
