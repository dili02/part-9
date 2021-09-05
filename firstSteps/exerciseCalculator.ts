interface ArgeumentsValues {
  targetAmountOfDailyHours: number;
  dailyExerciseHours: Array<number>;
}

export const parseArgumentsExercise = (targetAmountOfDailyHours: number,  dailyExerciseHours: Array<number>): ArgeumentsValues => {
  if (!isNaN(targetAmountOfDailyHours) && !dailyExerciseHours.some(isNaN)) {
    return {
      targetAmountOfDailyHours,
      dailyExerciseHours
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

interface ResultValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const excersiseCalculator = (
  targetAmountOfDailyHours: number,
  dailyExerciseHours: Array<number>
): ResultValues => {
  const periodLength = dailyExerciseHours.length;

  const trainingDays = dailyExerciseHours.filter((hours) => hours > 0).length;

  const average = dailyExerciseHours.reduce((a, b) => a + b, 0) / periodLength;

  const success = average >= targetAmountOfDailyHours ? true : false;

  let rating = 0;
  let ratingDescription = "";

  if (average < targetAmountOfDailyHours) {
    rating = 1;
    ratingDescription = "not too bad but could be better";
  }

  if (average === targetAmountOfDailyHours) {
    rating = 2;
    ratingDescription = "good job but could be better";
  }

  if (average > targetAmountOfDailyHours) {
    rating = 3;
    ratingDescription = "excellent work";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target: targetAmountOfDailyHours,
    average,
  };
};