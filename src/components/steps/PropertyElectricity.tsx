
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PropertyElectricityProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

export const PropertyElectricity: React.FC<PropertyElectricityProps> = ({ data, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    propertyType: data?.propertyType || '',
    ownershipStatus: data?.ownershipStatus || '',
    roofType: data?.roofType || '',
    roofingMaterial: data?.roofingMaterial || '',
    roofArea: data?.roofArea || '',
    electricityProvider: data?.electricityProvider || '',
    meterNumber: data?.meterNumber || '',
    averageMonthlyBill: data?.averageMonthlyBill || '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Property and Electricity Details</h2>
        <p className="text-gray-600">Help us understand your property to design the perfect solar solution</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="propertyType">Property Type *</Label>
            <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="ownershipStatus">Ownership Status *</Label>
            <Select value={formData.ownershipStatus} onValueChange={(value) => handleInputChange('ownershipStatus', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select ownership status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="owned">Owned</SelectItem>
                <SelectItem value="rented">Rented</SelectItem>
                <SelectItem value="leased">Leased</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="roofType">Roof Type *</Label>
            <Select value={formData.roofType} onValueChange={(value) => handleInputChange('roofType', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select roof type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flat">Flat</SelectItem>
                <SelectItem value="sloped">Sloped</SelectItem>
                <SelectItem value="hip">Hip</SelectItem>
                <SelectItem value="gable">Gable</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="roofingMaterial">Roofing Material</Label>
            <Select value={formData.roofingMaterial} onValueChange={(value) => handleInputChange('roofingMaterial', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select roofing material" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asphalt">Asphalt Shingles</SelectItem>
                <SelectItem value="metal">Metal</SelectItem>
                <SelectItem value="tile">Tile</SelectItem>
                <SelectItem value="concrete">Concrete</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="roofArea">Roof Area (sq ft) *</Label>
            <Input
              id="roofArea"
              type="number"
              value={formData.roofArea}
              onChange={(e) => handleInputChange('roofArea', e.target.value)}
              placeholder="Enter roof area in square feet"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="electricityProvider">Electricity Provider *</Label>
            <Input
              id="electricityProvider"
              value={formData.electricityProvider}
              onChange={(e) => handleInputChange('electricityProvider', e.target.value)}
              placeholder="Enter your electricity provider"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="meterNumber">Meter Number</Label>
            <Input
              id="meterNumber"
              value={formData.meterNumber}
              onChange={(e) => handleInputChange('meterNumber', e.target.value)}
              placeholder="Enter your electricity meter number"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="averageMonthlyBill">Average Monthly Bill (₹)</Label>
            <Input
              id="averageMonthlyBill"
              type="number"
              value={formData.averageMonthlyBill}
              onChange={(e) => handleInputChange('averageMonthlyBill', e.target.value)}
              placeholder="Enter your average monthly electricity bill"
              className="mt-1"
            />
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Did you know?</h3>
          <p className="text-green-700">
            The average solar installation pays for itself in 6-8 years and can save you up to 90% on your electricity bills!
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
          <Button type="submit" className="px-8 bg-blue-600 hover:bg-blue-700">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};
