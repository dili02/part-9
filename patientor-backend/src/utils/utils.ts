import { NewPatientEntry, Gender, Entry } from "../types";

const isString = (text: any): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error(`Incorrect or missing name ${name}`);
  }

  return name;
};

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error(`Incorrect or missing occupation ${occupation}`);
  }

  return occupation;
};

const parseSsn = (ssn: any): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error(`Incorrect or missing ssn ${ssn}`);
  }

  return ssn;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date: ${date}`);
  }
  return date;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender: ${gender}`);
  }
  return gender;
};

const isEntryType = (entry: any): entry is Entry => {
  const healthCheck: boolean = entry.type === "HealthCheck";
  const occupationalHealthcare: boolean =
    entry.type === "OccupationalHealthcare";
  const hospital: boolean = entry.type === "Hospital";

  return healthCheck || occupationalHealthcare || hospital;
};

const parseEntries = (entries: any): Entry[] => {
  if (!entries) return entries;
  if (entries.map((entry: any) => !isEntryType(entry))) {
    throw new Error("Incorrect or missing entries: " + entries);
  }
  return entries;
};

const toNewPatientEntry = (object: any): NewPatientEntry => {
  const newEntry: NewPatientEntry = {
    name: parseName(object.name),
    occupation: parseOccupation(object.occupation),
    ssn: parseSsn(object.ssn),
    dateOfBirth: parseDate(object.dateOfBirth),
    gender: parseGender(object.gender),
    entries: parseEntries(object.entries) || [],
  };

  return newEntry;
};

export default toNewPatientEntry;
