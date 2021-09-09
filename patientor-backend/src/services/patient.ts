import patientData from "../../data/patients.json";
import { v4 as uuidv4 } from 'uuid';
import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry } from "../types";

const patients: PatientEntry[] = patientData as PatientEntry[];

export const getAllPatients = (): PatientEntry[] => patients;

export const getPatientById = (
  id: string
): NonSensitivePatientEntry | undefined => {
  const patient = patients.find((patient) => patient.id === id);

  if (patient) {
    const { ssn, ...restOfPatient } = patient;
    return restOfPatient;
  }

  return undefined;
};

export const getAllPatientsWithoutSensitiveInfo =
  (): NonSensitivePatientEntry[] => {
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
    const newPatient = {
        id: uuidv4(),
        ...newPatientEntry
    }

    patients.push(newPatient)

    return newPatient
};

export default {
  getAllPatients,
  getAllPatientsWithoutSensitiveInfo,
  getPatientById,
  addPetient
};
