import React from 'react';
import { Button } from '@/components/ui/button';

interface NextStepsProps {
  steps: Array<{
    number: number;
    title: string;
    description: string;
    details: string[];
  }>;
  ctaText?: string;
  ctaAction?: () => void;
}

const NextSteps: React.FC<NextStepsProps> = ({
  steps,
  ctaText = "Start Your Free Setup Now →",
  ctaAction,
}) => {
  return (
    <div>
      <div>
        <h2>Next Steps: Get Started in 3 Easy Steps</h2>
        <p>
          Follow this proven implementation guide to go live in under 2 hours
        </p>
      </div>

      <div>
        {steps.map((step) => (
          <div key={step.number}>
            <div>
              <div>
                {step.number}
              </div>
              <h3>{step.title}</h3>
            </div>
            <p>{step.description}</p>
            <div>
              {step.details.map((detail, idx) => (
                <div key={idx}>
                  <span>✓</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <Button onClick={ctaAction}>
          🚀 {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default NextSteps;
