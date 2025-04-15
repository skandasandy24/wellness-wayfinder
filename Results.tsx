import React from 'react';
import { Scale, Apple, Activity, DumbbellIcon, X } from 'lucide-react';
import { ResultBlock } from './ResultBlock';
import { CalculationResult } from '../../types';

interface Props {
  result: CalculationResult;
  selectedBlock: string | null;
  onBlockSelect: (block: string) => void;
  onReset: () => void;
}

export function Results({ result, selectedBlock, onBlockSelect, onReset }: Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ResultBlock
          icon={Scale}
          title="BMI"
          content={`${result.bmi.toFixed(2)} - ${result.category}`}
          isSelected={selectedBlock === 'bmi'}
          onClick={() => onBlockSelect('bmi')}
        />
        <ResultBlock
          icon={Apple}
          title="Calorie Intake"
          content={result.calorieIntake}
          isSelected={selectedBlock === 'calories'}
          onClick={() => onBlockSelect('calories')}
        />
        <ResultBlock
          icon={Activity}
          title="Food Recommendations"
          content={result.foodRecommendations}
          isSelected={selectedBlock === 'food'}
          onClick={() => onBlockSelect('food')}
        />
        <ResultBlock
          icon={DumbbellIcon}
          title="Activities"
          content={result.activities}
          isSelected={selectedBlock === 'activities'}
          onClick={() => onBlockSelect('activities')}
        />
      </div>

      <button
        onClick={onReset}
        className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center gap-2 mt-8"
      >
        Start Over <X size={20} />
      </button>
    </div>
  );
}