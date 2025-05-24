
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface InspectionProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

export const Inspection: React.FC<InspectionProps> = ({ data, onNext, onBack }) => {
  const [selectedOption, setSelectedOption] = useState(data?.inspectionOption || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption) {
      onNext({ inspectionOption: selectedOption });
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Property Inspection Options</h2>
        <p className="text-gray-600">
          Before proceeding with the installation, a property inspection is required to ensure suitability and optimize the solar panel placement.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Inspection Option:</h3>
          
          <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className={`cursor-pointer transition-all hover:shadow-md ${selectedOption === 'vendor' ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="vendor" id="vendor" />
                    <CardTitle className="text-lg">Use Our Vendor</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our certified vendors will inspect your property. This option requires a fee of ₹2,500 which will be adjusted in your final installation cost.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Includes:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Comprehensive roof assessment</li>
                      <li>• Electrical system evaluation</li>
                      <li>• Shading analysis</li>
                      <li>• Detailed inspection report</li>
                      <li>• Installation recommendations</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className={`cursor-pointer transition-all hover:shadow-md ${selectedOption === 'own' ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="own" id="own" />
                    <CardTitle className="text-lg">Arrange Your Own Inspector</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    You can choose your own inspector. Please ensure they are certified and can provide a detailed report according to our requirements.
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Requirements:</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Certified electrical inspector</li>
                      <li>• Structural assessment capability</li>
                      <li>• Detailed written report</li>
                      <li>• Photos and measurements</li>
                      <li>• Safety compliance verification</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </RadioGroup>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">⚡ Why Inspection Matters</h3>
          <p className="text-green-700 text-sm">
            A thorough inspection ensures optimal panel placement, maximum energy generation, and long-term system reliability. It also helps identify any structural modifications needed before installation.
          </p>
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
            type="submit" 
            className="px-8 bg-blue-600 hover:bg-blue-700"
            disabled={!selectedOption}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};
