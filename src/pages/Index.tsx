
import React, { useState } from 'react';
import { ProgressTracker } from '../components/ProgressTracker';
import { PersonalInfo } from '../components/steps/PersonalInfo';
import { PropertyElectricity } from '../components/steps/PropertyElectricity';
import { DocumentUpload } from '../components/steps/DocumentUpload';
import { Agreement } from '../components/steps/Agreement';
import { Inspection } from '../components/steps/Inspection';
import { Confirmation } from '../components/steps/Confirmation';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    propertyElectricity: {},
    documents: {},
    agreement: {},
    inspection: {},
  });

  const { toast } = useToast();

  const steps = [
    { id: 1, title: 'Personal Info', component: PersonalInfo },
    { id: 2, title: 'Property & Electricity', component: PropertyElectricity },
    { id: 3, title: 'Documents', component: DocumentUpload },
    { id: 4, title: 'Agreement', component: Agreement },
    { id: 5, title: 'Inspection', component: Inspection },
    { id: 6, title: 'Confirmation', component: Confirmation },
  ];

  const handleSaveProgress = () => {
    // Save form data to localStorage
    localStorage.setItem('solarFormProgress', JSON.stringify({
      currentStep,
      formData,
      savedAt: new Date().toISOString()
    }));

    toast({
      title: "Progress Saved",
      description: "Your application progress has been saved successfully.",
      variant: "default",
    });
  };

  const handleNext = (stepData: any) => {
    setFormData(prev => ({
      ...prev,
      [getStepKey(currentStep)]: stepData
    }));
    
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const getStepKey = (step: number) => {
    const keys = ['personalInfo', 'propertyElectricity', 'documents', 'agreement', 'inspection'];
    return keys[step - 1];
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Solar Installation Application
            </h1>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Join thousands of homeowners saving with solar energy
            </p>
          </div>

          {/* Progress Tracker */}
          <ProgressTracker 
            steps={steps} 
            currentStep={currentStep} 
            onSaveProgress={handleSaveProgress}
          />

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mt-6 sm:mt-8">
            <CurrentStepComponent
              data={formData[getStepKey(currentStep) as keyof typeof formData]}
              onNext={handleNext}
              onBack={handleBack}
              currentStep={currentStep}
              totalSteps={steps.length}
            />
          </div>

          {/* Help Section */}
          <div className="mt-6 sm:mt-8 text-center px-4">
            <p className="text-sm sm:text-base text-gray-600">
              Need help? Contact us at{' '}
              <a href="mailto:support@solar.com" className="text-green-600 hover:text-green-700 break-all">
                support@solar.com
              </a>{' '}
              or call{' '}
              <a href="tel:+1234567890" className="text-green-600 hover:text-green-700 whitespace-nowrap">
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
