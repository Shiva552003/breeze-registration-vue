
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface DocumentUploadProps {
  data: any;
  onNext: (data: any) => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({ data, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    idProof: data?.idProof || null,
    electricityBill: data?.electricityBill || null,
  });

  const handleFileChange = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Document Upload</h2>
        <p className="text-gray-600">Upload the required documents to verify your application</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <Label htmlFor="idProof" className="text-lg font-semibold">ID Proof *</Label>
                <p className="text-sm text-gray-600 mb-3">
                  Upload a government-issued ID (Aadhaar, Passport, Driver's License)
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                  <input
                    id="idProof"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange('idProof', e.target.files?.[0] || null)}
                    className="hidden"
                  />
                  <label htmlFor="idProof" className="cursor-pointer">
                    <div className="text-gray-600">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="mt-2 text-sm">
                        <span className="font-semibold text-green-600">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                    </div>
                  </label>
                  {formData.idProof && (
                    <p className="mt-2 text-sm text-green-600">
                      ✓ {formData.idProof.name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="electricityBill" className="text-lg font-semibold">Latest Electricity Bill</Label>
                <p className="text-sm text-gray-600 mb-3">
                  Upload your most recent electricity bill for accurate assessment
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                  <input
                    id="electricityBill"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange('electricityBill', e.target.files?.[0] || null)}
                    className="hidden"
                  />
                  <label htmlFor="electricityBill" className="cursor-pointer">
                    <div className="text-gray-600">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="mt-2 text-sm">
                        <span className="font-semibold text-green-600">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                    </div>
                  </label>
                  {formData.electricityBill && (
                    <p className="mt-2 text-sm text-green-600">
                      ✓ {formData.electricityBill.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">🔒 Your documents are secure</h3>
          <p className="text-blue-700 text-sm">
            All uploaded documents are encrypted and stored securely. We only use them for verification purposes and never share them with third parties.
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
