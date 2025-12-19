'use client';

import React from 'react';
import RecommendationList from '@/components/RecommendationList';
import NextSteps from '@/components/NextSteps';
import { RecommendationItemProps } from '@/components/RecommendationItem';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Sample data for recommendations
const sampleRecommendations: RecommendationItemProps[] = [
  {
    title: 'HubSpot CRM',
    summary: 'Perfect for managing your first 100 customers with automated follow-ups, email tracking, and deal pipeline management. No credit card required to start.',
    rating: 4.5,
    reviewCount: 12847,
    matchScore: 94,
    isTopPick: true,
    icon: '📊',
    pricing: {
      amount: 'Free',
      details: ['Up to 1M contacts', 'Upgrade from $45/mo when ready'],
    },
    setupTime: {
      duration: '15 min',
      details: ['Quick start guide included', 'Full setup in under 1 hour'],
    },
    bestFor: {
      audience: 'Solo founders',
      details: ['0-100 customers', 'Scales with your growth'],
    },
    contextBenefits: [
      'Zero to hero: Start free and scale as you grow from 0 to 100+ customers',
      'Time-efficient: Automated workflows save 10+ hours per week on customer management',
      'Solo-friendly: Intuitive interface requires no technical expertise or team',
      'Customer-focused: Built-in tools for tracking interactions and nurturing leads',
      'Budget-conscious: Free tier covers everything you need for first customers',
    ],
    integrationBenefits: [
      'Mailchimp sync: Automatically add CRM contacts to email campaigns',
      'Calendly integration: Schedule meetings directly from customer records',
      'Stripe connection: Track payments and customer lifetime value automatically',
      'Analytics tracking: Connect website behavior to customer profiles',
      'Intercom sync: View support conversations alongside customer data',
    ],
  },
];

const nextStepsData = [
  {
    number: 1,
    title: 'Sign Up & Setup',
    description: 'Create your free HubSpot account and import existing contacts (CSV supported)',
    details: ['15 minutes', 'No credit card needed'],
  },
  {
    number: 2,
    title: 'Configure Pipeline',
    description: 'Set up your sales pipeline stages and automated email sequences',
    details: ['30 minutes', 'Templates provided'],
  },
  {
    number: 3,
    title: 'Connect Tools',
    description: 'Integrate with Mailchimp, Calendly, and other tools in your stack',
    details: ['45 minutes', 'One-click integrations'],
  },
];

const Recommendations = () => {
  return (
    <div>
      <div>
        <div className='flex justify-between px-5 py-3'>
          <div>
            {/* <Button variant="ghost" size="icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button> */}
            <div>
              <h1 className='text-3xl'>Your Recommendations</h1>
              <p className='text-lg'>
                Curated tools for solo founders getting their first customers.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>94</span>
                <div>
                  <span>Match Score</span>
                  <div>
                    <div style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <p>Excellent</p>
          </div>
        </div>
      </div>

      <RecommendationList recommendations={sampleRecommendations} />

      <div>
        {/* <NextSteps steps={nextStepsData} /> */}
      </div>
    </div>
  );
};

export default Recommendations;
