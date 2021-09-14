import React from "react";
import { CourseProps } from "./types";

const Total: React.FC<CourseProps> = ({ courseParts }) => {
  const totalExercises = courseParts.reduce((sum, exercise) => sum + exercise.exerciseCount, 0);

  return <p style={{ margin: 15 }}>Number of exercises: {totalExercises}</p>;
};

export default Total;
