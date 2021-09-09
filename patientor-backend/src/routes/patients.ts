import express from "express";
import {
  getAllPatientsWithoutSensitiveInfo,
  getPatientById,
  addPetient,
} from "../services/patient";
import toNewPatientEntry from '../utils/utils'

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getAllPatientsWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const patient = getPatientById(req.params.id);
  return patient !== null ? res.send(patient) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body)

    const addedPatientEntry = addPetient(newPatientEntry);

    res.json(addedPatientEntry);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
