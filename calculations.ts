import { FormData, CalculationResult } from '../types';

export function calculateResults(formData: FormData): CalculationResult {
  const age = parseInt(formData.age);
  const feet = parseInt(formData.feet);
  const weight = parseFloat(formData.weight);

  // Convert height to meters (1 foot = 0.3048 meters)
  const heightInMeters = feet * 0.3048;
  
  // BMI formula: weight (kg) / (height (m))²
  const bmi = Number((weight / (heightInMeters * heightInMeters)).toFixed(1));

  let category = "";
  let calorieIntake = "";
  let activities = "";

  // WHO BMI Classification
  if (bmi < 18.5) {
    category = "Underweight";
    calorieIntake = `Recommended daily intake: ${Math.round((weight * 35))} calories. Focus on nutrient-dense foods.`;
    activities = "Light strength training 3x/week, yoga, and regular walking.";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
    calorieIntake = `Recommended daily intake: ${Math.round((weight * 30))} calories. Maintain balanced nutrition.`;
    activities = "30 minutes of moderate exercise 5x/week, mix of cardio and strength training.";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
    calorieIntake = `Recommended daily intake: ${Math.round((weight * 25))} calories. Focus on portion control.`;
    activities = "45 minutes of moderate to vigorous exercise 5x/week, emphasize cardio.";
  } else {
    category = "Obese";
    calorieIntake = `Recommended daily intake: ${Math.round((weight * 22))} calories. Consult a healthcare professional.`;
    activities = "Start with 20-30 minutes of low-impact exercise daily, gradually increase intensity.";
  }

  let foodRecommendations = "";
  if (formData.financialStatus === "low") {
    foodRecommendations = formData.foodType === "veg" 
      ? "Budget-friendly options: Lentils, beans, seasonal vegetables, whole grains, and eggs." 
      : "Affordable proteins: Eggs, canned tuna, chicken thighs, beans, and seasonal produce.";
  } else if (formData.financialStatus === "medium") {
    foodRecommendations = formData.foodType === "veg" 
      ? "Mixed options: Quinoa, tofu, tempeh, nuts, fresh produce, and plant-based proteins." 
      : "Balanced choices: Lean meats, fish, eggs, dairy, whole grains, and fresh produce.";
  } else {
    foodRecommendations = formData.foodType === "veg" 
      ? "Premium choices: Organic produce, specialty grains, premium nuts, and plant-based alternatives." 
      : "High-quality options: Wild-caught fish, grass-fed meats, organic produce, and specialty items.";
  }

  return {
    bmi,
    category,
    calorieIntake,
    foodRecommendations,
    activities,
  };
}