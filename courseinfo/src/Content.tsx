import React from "react";
import { CourseProps } from "./types";
import { assertNever } from "./utils";

const Content: React.FC<CourseProps> = ({ courseParts }) => (
  <div>
    {courseParts.map((part, i) => {
      switch (part.type) {
        case "normal":
          return (
            <div style={{ padding: 15 }} key={i}>
              <p style={{ fontWeight: "bold", margin: 0 }}>
                {part.name} - {part.exerciseCount}
              </p>
              <p style={{ fontStyle: "italic", margin: 0 }}>
                {part.description}
              </p>
            </div>
          );
        case "groupProject":
          return (
            <div style={{ padding: 15 }} key={i}>
              <p style={{ fontWeight: "bold", margin: 0 }}>
                {part.name} - {part.exerciseCount}
              </p>
              <p style={{ margin: 0 }}>
                project exercises {part.groupProjectCount}
              </p>
            </div>
          );
        case "submission":
          return (
            <div style={{ padding: 15 }} key={i}>
              <p style={{ fontWeight: "bold", margin: 0 }}>
                {part.name} - {part.exerciseCount}
              </p>
              <p style={{ margin: 0 }}>
                submit to {part.exerciseSubmissionLink}
              </p>
            </div>
          );
        case "special":
          return (
            <div style={{ padding: 15 }} key={i}>
              <p style={{ fontWeight: "bold", margin: 0 }}>
                {part.name} - {part.exerciseCount}
              </p>
              <p style={{ fontStyle: "italic", margin: 0 }}>
                {part.description}
              </p>
              <p style={{ margin: 0 }}>
                required skills: {part.requirements.join(", ")}.
              </p>
            </div>
          );
        default:
          return assertNever(part);
      }
    })}
  </div>
);

export default Content;
