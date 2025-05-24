
import React, { useState } from 'react';
import { ProgressTracker } from '../components/ProgressTracker';
import { PersonalInfo } from '../components/steps/PersonalInfo';
import { PropertyElectricity } from '../components/steps/PropertyElectricity';
import { DocumentUpload } from '../components/steps/DocumentUpload';
import { Agreement } from '../components/steps/Agreement';
import { Inspection } from '../components/steps/Inspection';
import { Confirmation } from '../components/steps/Confirmation';

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    propertyElectricity: {},
    documents: {},
    agreement: {},
    inspection: {},
  });

  const steps = [
    { id: 1, title: 'Personal Info', component: PersonalInfo },
    { id: 2, title: 'Property & Electricity', component: PropertyElectricity },
    { id: 3, title: 'Documents', component: DocumentUpload },
    { id: 4, title: 'Agreement', component: Agreement },
    { id: 5, title: 'Inspection', component: Inspection },
    { id: 6, title: 'Confirmation', component: Confirmation },
  ];

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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Solar Installation Application
            </h1>
            <p className="text-lg text-gray-600">
              Join thousands of homeowners saving with solar energy
            </p>
          </div>

          {/* Progress Tracker */}
          <ProgressTracker steps={steps} currentStep={currentStep} />

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <CurrentStepComponent
              data={formData[getStepKey(currentStep) as keyof typeof formData]}
              onNext={handleNext}
              onBack={handleBack}
              currentStep={currentStep}
              totalSteps={steps.length}
            />
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need help? Contact us at{' '}
              <a href="mailto:support@solar.com" className="text-green-600 hover:text-green-700">
                support@solar.com
              </a>{' '}
              or call{' '}
              <a href="tel:+1234567890" className="text-green-600 hover:text-green-700">
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
