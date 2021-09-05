interface BMIvalues {
    heightCm: number;
    wieghtKg: number;
}

export const parseArgumentsBMI = (height: number, weight: number): BMIvalues => {
    if (!isNaN(Number(height)) && !isNaN(Number(weight))) {
        return {
            heightCm: height,
            wieghtKg: weight
        };
      } else {
        throw new Error('Provided values were not numbers!');
      }
};

export const calculatorBMI = (height: number, weight: number) => {
    const bmi = weight / ((height / 100) * (height / 100));

    if (bmi < 15) return 'Very severely underweight';

    if (bmi > 15 && bmi < 16) return 'Severely underweight';

    if (bmi > 16 && bmi < 18.5) return 'Underweight';

    if (bmi > 18.5 && bmi < 25) return 'Normal (healthy weight)';

    if (bmi > 25 && bmi < 30) return 'Overweight';

    if (bmi > 30 && bmi < 35) return 'Obese Class I (Moderately obese)';

    if (bmi > 35 && bmi < 40) return 'Obese Class II (Severely obese)';

    if (bmi >= 40) return 'Obese Class III (Very severely obese)';

    return `Oops something went wrong, unable to calculate bmi`;
};
