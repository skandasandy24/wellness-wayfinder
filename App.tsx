import React, { useState } from 'react';
import { BMIForm } from './components/BMICalculator/BMIForm';
import { Results } from './components/BMICalculator/Results';
import { LoginForm } from './components/Auth/LoginForm';
import { FormData, CalculationResult, LoginFormData, User } from './types';
import { calculateResults } from './utils/calculations';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<FormData>({
    age: '',
    feet: '',
    weight: '',
    financialStatus: 'medium',
    foodType: 'veg',
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showForm, setShowForm] = useState(true);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  const handleLogin = (loginData: LoginFormData) => {
    // Mock login - replace with actual authentication
    setUser({
      email: loginData.email,
      name: loginData.email.split('@')[0],
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculate = () => {
    const age = parseInt(formData.age);
    const feet = parseInt(formData.feet);
    const weight = parseFloat(formData.weight);

    if (isNaN(age) || isNaN(feet) || isNaN(weight) || age <= 0 || feet <= 0 || weight <= 0) {
      alert("Please enter valid positive numbers for age, height, and weight.");
      return;
    }

    setResult(calculateResults(formData));
    setShowForm(false);
  };

  const resetForm = () => {
    setResult(null);
    setShowForm(true);
    setSelectedBlock(null);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80')" }}>
        <div className="min-h-screen bg-black/50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
              Welcome to Wellness Wayfinder
            </h1>
            <LoginForm onLogin={handleLogin} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80')" }}>
      <div className="min-h-screen bg-black/50 flex items-center justify-center p-4">
        <div className="max-w-3xl w-full bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-green-600">
              Wellness Wayfinder
            </h1>
            <div className="text-sm text-gray-600">
              Welcome, {user.name}!
            </div>
          </div>

          {showForm ? (
            <BMIForm
              formData={formData}
              onInputChange={handleInputChange}
              onCalculate={calculate}
            />
          ) : result && (
            <Results
              result={result}
              selectedBlock={selectedBlock}
              onBlockSelect={setSelectedBlock}
              onReset={resetForm}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;