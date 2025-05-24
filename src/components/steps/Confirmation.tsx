
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface ConfirmationProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

export const Confirmation: React.FC<ConfirmationProps> = ({ onBack }) => {
  const handleSubmitApplication = () => {
    // Handle final submission
    console.log('Application submitted successfully!');
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Submitted Successfully!</h2>
        <p className="text-lg text-gray-600">
          Thank you for completing your solar installation application. Your application has been received and is being processed.
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Application Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Application ID:</span>
              <span className="ml-2">SA-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Name:</span>
              <span className="ml-2">[Customer Name]</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Email:</span>
              <span className="ml-2">[Customer Email]</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Contact Number:</span>
              <span className="ml-2">[Customer Phone]</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Inspection Choice:</span>
              <span className="ml-2">Self-Arranged</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">1</span>
              <span>Arrange your property inspection within the next 7 days</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">2</span>
              <span>Our team will contact you within 48 hours to coordinate next steps</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">3</span>
              <span>Schedule the installation after inspection approval</span>
            </li>
          </ol>
        </CardContent>
      </Card>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">🎉 Welcome to the Solar Revolution!</h3>
        <p className="text-gray-700 mb-4">
          You're about to join thousands of homeowners who are saving money and helping the environment with clean solar energy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-lg">
            <div className="text-2xl font-bold text-green-600">25 Years</div>
            <div className="text-gray-600">Equipment Warranty</div>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <div className="text-2xl font-bold text-green-600">90%</div>
            <div className="text-gray-600">Bill Reduction</div>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <div className="text-2xl font-bold text-green-600">6-8 Years</div>
            <div className="text-gray-600">Payback Period</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="px-8"
        >
          Back
        </Button>
        <Button 
          onClick={handleSubmitApplication}
          className="px-8 bg-green-600 hover:bg-green-700"
        >
          Submit Application
        </Button>
      </div>
    </div>
  );
};
