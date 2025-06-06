import React, { useState } from 'react';

const CustomdesignPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    category: '',
    metal: '',
    diamond: '',
    setting: ''
  });

  const steps = [
    { number: 1, title: 'Choose Category', key: 'category' },
    { number: 2, title: 'Select Metal', key: 'metal' },
    { number: 3, title: 'Pick Diamond', key: 'diamond' },
    { number: 4, title: 'Choose Setting', key: 'setting' }
  ];

  const options = {
    category: [
      { id: 'ring', name: 'Ring', image: '💍' },
      { id: 'necklace', name: 'Necklace', image: '📿' },
      { id: 'earrings', name: 'Earrings', image: '👂' },
      { id: 'bracelet', name: 'Bracelet', image: '📿' }
    ],
    metal: [
      { id: 'white-gold', name: 'White Gold', image: '⚪' },
      { id: 'yellow-gold', name: 'Yellow Gold', image: '🟡' },
      { id: 'rose-gold', name: 'Rose Gold', image: '🌹' },
      { id: 'platinum', name: 'Platinum', image: '⚫' }
    ],
    diamond: [
      { id: 'round', name: 'Round Cut', image: '💎' },
      { id: 'princess', name: 'Princess Cut', image: '💠' },
      { id: 'emerald', name: 'Emerald Cut', image: '🔷' },
      { id: 'oval', name: 'Oval Cut', image: '🔹' }
    ],
    setting: [
      { id: 'solitaire', name: 'Solitaire', image: '💍' },
      { id: 'halo', name: 'Halo', image: '🌟' },
      { id: 'vintage', name: 'Vintage', image: '✨' },
      { id: 'modern', name: 'Modern', image: '💫' }
    ]
  };

  const handleOptionSelect = (stepKey, optionId) => {
    setSelectedOptions(prev => ({
      ...prev,
      [stepKey]: optionId
    }));
    
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const getCurrentStepOptions = () => {
    const currentStepKey = steps[currentStep - 1].key;
    return options[currentStepKey] || [];
  };

  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  const isStepCompleted = (stepKey) => {
    return selectedOptions[stepKey] !== '';
  };

  return (
    <div className="w-full min-h-screen bg-stone-50 py-8 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
        .typo-grotesk {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 500;
          letter-spacing: 0.1em;
        }
        
        .yorkten-light {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 300;
          letter-spacing: 0.05em;
        }
        
        .museo-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 300;
          letter-spacing: 0.02em;
        }
        
        .color-bold {
          color: #52583c;
        }
        
        .color-medium {
          color: #6b7257;
        }
        
        .color-light {
          color: #8a9177;
        }
        
        .bg-color-bold {
          background-color: #52583c;
        }
        
        .bg-color-medium {
          background-color: #6b7257;
        }
        
        .bg-color-light {
          background-color: #8a9177;
        }
        
        .hover-color-bold:hover {
          background-color: #464b34;
        }
        
        .step-completed {
          background-color: #52583c;
          color: white;
        }
        
        .step-active {
          background-color: #6b7257;
          color: white;
        }
        
        .step-inactive {
          background-color: #e5e7eb;
          color: #9ca3af;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="yorkten-light text-3xl sm:text-4xl color-bold mb-4 tracking-wider">
            DESIGN YOUR CUSTOM JEWELRY
          </h1>
          <p className="museo-sans text-lg color-medium">
            Create your perfect piece in just 4 simple steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <button
                  onClick={() => goToStep(step.number)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer
                    ${isStepCompleted(step.key) ? 'step-completed' : 
                      currentStep === step.number ? 'step-active' : 'step-inactive'}`}
                >
                  {step.number}
                </button>
                
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gray-300 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current Step */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8">
          <h2 className="typo-grotesk text-xl color-bold mb-6 text-center">
            STEP {currentStep}: {steps[currentStep - 1].title.toUpperCase()}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {getCurrentStepOptions().map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(steps[currentStep - 1].key, option.id)}
                className={`p-4 rounded-lg border-2 transition-all text-center hover:shadow-md
                  ${selectedOptions[steps[currentStep - 1].key] === option.id 
                    ? 'border-color-bold bg-color-bold bg-opacity-10' 
                    : 'border-gray-200 hover:border-color-light'}`}
              >
                <div className="text-2xl mb-2">{option.image}</div>
                <div className="typo-grotesk text-sm color-bold">{option.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Options Summary */}
        {Object.values(selectedOptions).some(option => option !== '') && (
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8">
            <h3 className="typo-grotesk text-lg color-bold mb-4">YOUR SELECTIONS:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {steps.map((step) => {
                const selectedOption = selectedOptions[step.key];
                const optionData = selectedOption ? 
                  options[step.key].find(opt => opt.id === selectedOption) : null;
                
                return (
                  <div key={step.key} className="text-center">
                    <div className="museo-sans text-sm color-medium mb-1">{step.title}</div>
                    {optionData ? (
                      <>
                        <div className="text-xl mb-1">{optionData.image}</div>
                        <div className="typo-grotesk text-xs color-bold">{optionData.name}</div>
                      </>
                    ) : (
                      <div className="text-gray-400 text-sm">Not selected</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className={`typo-grotesk px-6 py-3 text-sm transition-colors uppercase
              ${currentStep === 1 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-color-medium hover:bg-color-bold text-white'}`}
          >
            Previous Step
          </button>

          {currentStep < 4 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={!selectedOptions[steps[currentStep - 1].key]}
              className={`typo-grotesk px-6 py-3 text-sm transition-colors uppercase
                ${!selectedOptions[steps[currentStep - 1].key]
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-color-bold hover-color-bold text-white'}`}
            >
              Next Step
            </button>
          ) : (
            <button
              onClick={() => alert('Design completed! Our team will contact you soon.')}
              disabled={!Object.values(selectedOptions).every(option => option !== '')}
              className={`typo-grotesk px-8 py-3 text-sm transition-colors uppercase shadow-lg
                ${!Object.values(selectedOptions).every(option => option !== '')
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-color-bold hover-color-bold text-white'}`}
            >
              Complete Design
            </button>
          )}
        </div>

        {/* Help Text */}
        <div className="text-center mt-8">
          <p className="museo-sans text-sm color-light">
            Need help? Contact our design specialists at{' '}
            <a href="mailto:design@jewelry.com" className="color-bold hover:underline">
              design@jewelry.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomdesignPage;