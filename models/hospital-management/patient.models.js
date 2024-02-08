/** @format */

import mongoose from "mongoose";

const patientShcema = new mongoose.Schema({});

export const Patient = mongoose.model("Patient", patientShcema);
