import patientData from "../../data/patients.json";
import { v4 as uuidv4 } from "uuid";
import {
  PatientEntry,
  PublicPatient,
  NewPatientEntry,
  NewEntry,
  Entry
} from "../types";
const shortid = require("shortid");

const patients: PatientEntry[] = patientData as PatientEntry[];

export const getAllPatients = (): PatientEntry[] => patients;

export const getPatientById = (id: string): PublicPatient | undefined => {
  const patient = patients.find((patient) => patient.id === id);

  if (patient) {
    const { ssn, ...restOfPatient } = patient;
    return restOfPatient;
  }

  return undefined;
};

export const getAllPatientsWithoutSensitiveInfo = (): PublicPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    };
  });
};

export const addPetient = (newPatientEntry: NewPatientEntry): PatientEntry => {
  const newPatient: PatientEntry = {
    id: uuidv4(),
    ...newPatientEntry,
  };

  patients.push(newPatient);

  return newPatient;
};

export const addEntry = (
  patient: PatientEntry,
  newEntry: NewEntry
): PatientEntry => {
  const id: string = shortid.generate();

  const entryToAdd: Entry = {
    ...newEntry,
    id,
  };
  patient.entries.push(entryToAdd);

  return patient;
};

export default {
  getAllPatients,
  getAllPatientsWithoutSensitiveInfo,
  getPatientById,
  addPetient,
};
