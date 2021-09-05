/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import { parseArgumentsBMI, calculatorBMI } from "./bmiCalculator";
import {
  parseArgumentsExercise,
  excersiseCalculator,
} from "./exerciseCalculator";

const app = express();
app.use(express.json());

app.get("/", (_request, response) => response.send("Hello Full Stack!!!"));

app.get("/bmi", (request, response) => {
  const { weight, height } = request.query;

  if (!weight || !height)
    response.status(400).send({
      error: "malformatted parameters",
    });

  try {
    const { heightCm, wieghtKg } = parseArgumentsBMI(
      Number(height),
      Number(weight)
    );

    const bmi = calculatorBMI(heightCm, wieghtKg);

    response.status(200).send({
      weight: wieghtKg,
      height: heightCm,
      bmi,
    });
  } catch (error) {
    response.status(400).send({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      error: error.message,
    });
  }
});

app.post("/exercises", (request, response) => {
  const { daily_exercises, target } = request.body;

  if (!daily_exercises || !target)
    response.status(400).json({
      error: "malformatted parameters",
    });

  try {
    const { targetAmountOfDailyHours, dailyExerciseHours } =
      parseArgumentsExercise(target, daily_exercises);

      response
      .status(200)
      .json(excersiseCalculator(targetAmountOfDailyHours, dailyExerciseHours));
  } catch (error) {
    response.status(400).json({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      error: error.message,
    });
  }
});

const PORT = 3003;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
