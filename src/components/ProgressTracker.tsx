import React from 'react';
import { Check, Save } from 'lucide-react';
import { Button } from './ui/button';
interface Step {
  id: number;
  title: string;
}
interface ProgressTrackerProps {
  steps: Step[];
  currentStep: number;
  onSaveProgress?: () => void;
}
export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  steps,
  currentStep,
  onSaveProgress
}) => {
  return <div className="w-full">
      {/* Save Progress Button */}
      <div className="flex justify-end mb-6">
        <Button onClick={onSaveProgress} variant="outline" className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300 transition-all duration-300">
          <Save className="w-4 h-4 mr-2" />
          Save Progress
        </Button>
      </div>

      <div className="relative flex items-center justify-between mb-8 px-4">
        {/* Background Progress Line */}
        <div className="absolute top-6 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200 rounded-full px-[9px] py-0 mx-[55px]">
          <div className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full transition-all duration-1000 ease-out shadow-lg" style={{
          width: `${(currentStep - 1) / (steps.length - 1) * 100}%`,
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
        }} />
        </div>

        {steps.map((step, index) => <div key={step.id} className="relative flex flex-col items-center z-10">
            {/* Step Circle */}
            <div className={`relative w-12 h-12 rounded-full flex items-center justify-center border-3 transition-all duration-500 ease-out transform ${step.id < currentStep ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-500 text-white scale-110 shadow-lg animate-pulse' : step.id === currentStep ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-500 text-white scale-125 shadow-2xl' : 'bg-white border-gray-300 text-gray-500 hover:border-gray-400 hover:scale-105'}`} style={{
          boxShadow: step.id <= currentStep ? `0 8px 25px ${step.id === currentStep ? 'rgba(59, 130, 246, 0.5)' : 'rgba(34, 197, 94, 0.4)'}` : '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
              {/* Ripple Effect for Current Step */}
              {step.id === currentStep && <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30" />}
              
              {/* Step Content */}
              <div className="relative z-10">
                {step.id < currentStep ? <Check className="w-6 h-6 animate-scale-in" /> : <span className="text-sm font-bold">{step.id}</span>}
              </div>

              {/* Success Glow Effect */}
              {step.id < currentStep && <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-pulse" />}
            </div>

            {/* Step Title */}
            <div className="mt-3 text-center">
              <span className={`text-sm font-semibold transition-all duration-300 ${step.id <= currentStep ? 'text-gray-900 transform scale-105' : 'text-gray-500'} ${step.id === currentStep ? 'animate-pulse' : ''}`}>
                {step.title}
              </span>
              
              {/* Active Step Indicator */}
              {step.id === currentStep && <div className="mt-1 w-2 h-2 bg-blue-500 rounded-full mx-auto animate-pulse" />}
            </div>

            {/* Connecting Lines Between Steps */}
            {index < steps.length - 1 && <div className="absolute top-6 left-12 w-full">
                <div className={`h-1 transition-all duration-700 ease-out ${step.id < currentStep ? 'bg-gradient-to-r from-green-500 to-green-400 shadow-sm' : 'bg-gray-200'}`} style={{
            width: 'calc(100vw / 6 - 3rem)',
            boxShadow: step.id < currentStep ? '0 2px 8px rgba(34, 197, 94, 0.3)' : 'none'
          }} />
              </div>}
          </div>)}
      </div>

      {/* Progress Percentage Display */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-200">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
          <span className="text-sm font-medium text-gray-700">
            Progress: {Math.round((currentStep - 1) / (steps.length - 1) * 100)}% Complete
          </span>
        </div>
      </div>
    </div>;
};