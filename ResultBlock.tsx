import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  title: string;
  content: string;
  isSelected: boolean;
  onClick: () => void;
}

export function ResultBlock({ icon: Icon, title, content, isSelected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-xl cursor-pointer transition-all duration-200 ${
        isSelected ? 'bg-green-600 text-white scale-105' : 'bg-white hover:bg-green-50'
      }`}
    >
      <Icon className="w-8 h-8 mb-2" />
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      {isSelected ? (
        <p>{content}</p>
      ) : (
        <p className="text-sm text-gray-500">Click to view details</p>
      )}
    </div>
  );
}