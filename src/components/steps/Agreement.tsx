
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AgreementProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

export const Agreement: React.FC<AgreementProps> = ({ data, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    carbonCreditsTransfer: data?.carbonCreditsTransfer || false,
    termsAccepted: data?.termsAccepted || false,
  });

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.termsAccepted) {
      onNext(formData);
    }
  };

  const isFormValid = formData.termsAccepted;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Terms & Agreement</h2>
        <p className="text-gray-600">Please review and accept the terms to proceed</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Terms and Conditions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg max-h-60 overflow-y-auto">
              <h4 className="font-semibold mb-2">Solar Installation Agreement</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  This agreement outlines the terms and conditions for the installation and maintenance of your solar energy system.
                </p>
                <p>
                  <strong>Installation Terms:</strong> Our certified technicians will install your solar system according to industry standards and local regulations.
                </p>
                <p>
                  <strong>Warranty:</strong> All equipment comes with manufacturer warranties ranging from 10-25 years.
                </p>
                <p>
                  <strong>Maintenance:</strong> Regular maintenance and monitoring services are included for the first year.
                </p>
                <p>
                  <strong>Performance Guarantee:</strong> We guarantee your system will perform within 90% of projected output.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="carbonCredits"
                  checked={formData.carbonCreditsTransfer}
                  onCheckedChange={(checked) => handleCheckboxChange('carbonCreditsTransfer', checked as boolean)}
                />
                <div>
                  <Label htmlFor="carbonCredits" className="text-sm font-medium">
                    Carbon Credits Transfer
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    I agree to transfer the carbon credits generated by the solar installation to the company for the duration of the agreement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleCheckboxChange('termsAccepted', checked as boolean)}
                />
                <div>
                  <Label htmlFor="terms" className="text-sm font-medium">
                    Terms and Conditions *
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    I have read and understood the complete terms and conditions of the solar installation agreement.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">🌱 Environmental Impact</h3>
          <p className="text-green-700 text-sm">
            By going solar, you're contributing to a cleaner environment. Your system will offset approximately 3-4 tons of CO2 annually!
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
            disabled={!isFormValid}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};
