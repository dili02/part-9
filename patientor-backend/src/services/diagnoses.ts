import diagnoseData from "../../data/diagnoses.json";
import { DiagnoseEntry } from "../types";

const diagnoses: Array<DiagnoseEntry> = diagnoseData as Array<DiagnoseEntry>;

export const getAllDiagnoses = () => diagnoses;

export default {
    getAllDiagnoses
}