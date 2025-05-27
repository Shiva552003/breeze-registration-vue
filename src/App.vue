<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-2">
            Solar Installation Application
          </h1>
          <p class="text-lg text-gray-600">
            Join thousands of homeowners saving with solar energy
          </p>
        </div>

        <!-- Progress Tracker -->
        <div class="w-full">
          <!-- Save Progress Button -->
          <div class="flex justify-end mb-6">
            <button @click="saveProgress" class="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300 transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-md border">
              <SaveIcon class="w-4 h-4" />
              Save Progress
            </button>
          </div>

          <div class="relative flex items-center justify-between mb-8 px-4">
            <!-- Background Progress Line -->
            <div class="absolute top-6 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200 rounded-full px-[9px] py-0 mx-[55px]">
              <div 
                class="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full transition-all duration-1000 ease-out shadow-lg"
                :style="{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }"
              />
            </div>

            <div v-for="(step, index) in steps" :key="step.id" class="relative flex flex-col items-center z-10">
              <!-- Step Circle -->
              <div 
                :class="[
                  'relative w-12 h-12 rounded-full flex items-center justify-center border-3 transition-all duration-500 ease-out transform',
                  step.id < currentStep ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-500 text-white scale-110 shadow-lg animate-pulse' :
                  step.id === currentStep ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-500 text-white scale-125 shadow-2xl' :
                  'bg-white border-gray-300 text-gray-500 hover:border-gray-400 hover:scale-105'
                ]"
              >
                <!-- Ripple Effect for Current Step -->
                <div v-if="step.id === currentStep" class="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30" />
                
                <!-- Step Content -->
                <div class="relative z-10">
                  <CheckIcon v-if="step.id < currentStep" class="w-6 h-6 animate-scale-in" />
                  <span v-else class="text-sm font-bold">{{ step.id }}</span>
                </div>

                <!-- Success Glow Effect -->
                <div v-if="step.id < currentStep" class="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-pulse" />
              </div>

              <!-- Step Title -->
              <div class="mt-3 text-center">
                <span :class="[
                  'text-sm font-semibold transition-all duration-300',
                  step.id <= currentStep ? 'text-gray-900 transform scale-105' : 'text-gray-500',
                  step.id === currentStep ? 'animate-pulse' : ''
                ]">
                  {{ step.title }}
                </span>
                
                <!-- Active Step Indicator -->
                <div v-if="step.id === currentStep" class="mt-1 w-2 h-2 bg-blue-500 rounded-full mx-auto animate-pulse" />
              </div>
            </div>
          </div>

          <!-- Progress Percentage Display -->
          <div class="text-center mb-4">
            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-200">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
              <span class="text-sm font-medium text-gray-700">
                Progress: {{ Math.round(((currentStep - 1) / (steps.length - 1)) * 100) }}% Complete
              </span>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="bg-white rounded-xl shadow-lg p-8 mt-8">
          <!-- Personal Info Step -->
          <div v-if="currentStep === 1" class="space-y-6">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
              <p class="text-gray-600">Please provide your basic information to get started</p>
            </div>

            <form @submit.prevent="handleNext" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="field in personalInfoFields" :key="field.id">
                  <label :for="field.id" class="block text-sm font-medium text-gray-700">
                    {{ field.label }} {{ field.required ? '*' : '' }}
                  </label>
                  <input
                    :id="field.id"
                    v-model="formData.personalInfo[field.id]"
                    :type="field.type"
                    :required="field.required"
                    :placeholder="field.placeholder"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div class="flex justify-between pt-6">
                <button
                  type="button"
                  @click="handleBack"
                  :disabled="currentStep === 1"
                  class="px-8 py-2 border rounded-md hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  class="px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </form>
          </div>

          <!-- Property & Electricity Step -->
          <div v-else-if="currentStep === 2">
            <!-- Similar structure for other steps -->
            <!-- Add the content for Property & Electricity step -->
          </div>

          <!-- Additional steps would follow the same pattern -->
        </div>

        <!-- Help Section -->
        <div class="mt-8 text-center">
          <p class="text-gray-600">
            Need help? Contact us at
            <a href="mailto:support@solar.com" class="text-green-600 hover:text-green-700">
              support@solar.com
            </a>
            or call
            <a href="tel:+1234567890" class="text-green-600 hover:text-green-700">
              (123) 456-7890
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { CheckIcon, SaveIcon } from 'lucide-vue-next'

const currentStep = ref(1)
const steps = [
  { id: 1, title: 'Personal Info' },
  { id: 2, title: 'Property & Electricity' },
  { id: 3, title: 'Documents' },
  { id: 4, title: 'Agreement' },
  { id: 5, title: 'Inspection' },
  { id: 6, title: 'Confirmation' }
]

const personalInfoFields = [
  { id: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
  { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'Enter your email' },
  { id: 'mobileNumber', label: 'Mobile Number', type: 'tel', required: true, placeholder: 'Enter your mobile number' },
  { id: 'aadhaarNumber', label: 'Aadhaar Number', type: 'text', required: false, placeholder: 'Enter your 12-digit Aadhaar number' },
  { id: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: false },
  { id: 'streetAddress', label: 'Street Address', type: 'text', required: true, placeholder: 'Enter your street address' },
  { id: 'city', label: 'City', type: 'text', required: true, placeholder: 'Enter your city' },
  { id: 'state', label: 'State/Province', type: 'text', required: false, placeholder: 'State/Province' },
  { id: 'postalCode', label: 'Postal Code', type: 'text', required: false, placeholder: 'Postal/ZIP code' },
  { id: 'country', label: 'Country', type: 'text', required: false, placeholder: 'Enter your country' }
]

const formData = reactive({
  personalInfo: {},
  propertyElectricity: {},
  documents: {},
  agreement: {},
  inspection: {}
})

const handleNext = () => {
  if (currentStep.value < steps.length) {
    currentStep.value++
  }
}

const handleBack = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const saveProgress = () => {
  localStorage.setItem('solarFormProgress', JSON.stringify({
    currentStep: currentStep.value,
    formData,
    savedAt: new Date().toISOString()
  }))

  // You might want to add a toast notification here
  alert('Progress saved successfully!')
}
</script>

<style>
.animate-scale-in {
  animation: scale-in 0.6s ease-out;
}

@keyframes scale-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>