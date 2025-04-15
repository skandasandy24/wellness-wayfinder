export interface FormData {
  age: string;
  feet: string;
  weight: string;
  financialStatus: string;
  foodType: string;
}

export interface CalculationResult {
  bmi: number;
  category: string;
  calorieIntake: string;
  foodRecommendations: string;
  activities: string;
}

export interface User {
  email: string;
  name: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}