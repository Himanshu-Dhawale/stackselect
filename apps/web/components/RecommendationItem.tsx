import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface RecommendationItemProps {
  title: string;
  summary: string;
  rating: number;
  reviewCount?: number;
  matchScore?: number;
  isTopPick?: boolean;
  icon?: string;
  pricing: {
    amount: string;
    period?: string;
    details: string[];
  };
  setupTime: {
    duration: string;
    details: string[];
  };
  bestFor: {
    audience: string;
    details: string[];
  };
  contextBenefits?: string[];
  integrationBenefits?: string[];
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({
  title,
  summary,
  rating,
  reviewCount,
  matchScore,
  isTopPick,
  icon = '⚡',
  pricing,
  setupTime,
  bestFor,
  contextBenefits = [],
  integrationBenefits = [],
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div>
        {[...Array(fullStars)].map((_, i) => (
          <span key={i}>★</span>
        ))}
        {hasHalfStar && <span>☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i}>★</span>
        ))}
        <span>{rating.toFixed(1)}</span>
        {reviewCount && (
          <span>({reviewCount.toLocaleString()} reviews)</span>
        )}
      </div>
    );
  };

  return (
    <Card className='flex flex-col gap-4'>
<CardHeader>
  <div className="flex items-start gap-3">
    <div className="text-2xl">{icon}</div>

    <div className="flex-1 space-y-2">
      <div className="flex items-center gap-2">
        {isTopPick && <Badge>TOP PICK</Badge>}
        {matchScore && <Badge>{matchScore}% Match</Badge>}
      </div>

      <CardTitle className="text-3xl">{title}</CardTitle>

      <div className="space-y-1">
        <div className="flex flex-col">{renderStars(rating)}</div>
        <CardDescription>{summary}</CardDescription>
      </div>
    </div>
  </div>
</CardHeader>
      <CardContent>
        <div className='flex gap-5'>
          <div className='w-[300px] border-[2px] border-black rounded-lg p-5'>
            <div>
              <span>💰</span>
              <span>Pricing</span>
            </div>
            <p>{pricing.amount}</p>
            {pricing.period && <p>{pricing.period}</p>}
            {pricing.details.map((detail, idx) => (
              <p key={idx}>{detail}</p>
            ))}
          </div>

          <div className='w-[300px] border-[2px] border-black rounded-lg p-5'>
            <div>
              <span>⏰</span>
              <span>Setup Time</span>
            </div>
            <p>{setupTime.duration}</p>
            {setupTime.details.map((detail, idx) => (
              <p key={idx}>{detail}</p>
            ))}
          </div>

          <div className='w-[300px] border-[2px] border-black rounded-lg p-5'>
            <div>
              <span>👥</span>
              <span>Best For</span>
            </div>
            <p>{bestFor.audience}</p>
            {bestFor.details.map((detail, idx) => (
              <p key={idx}>{detail}</p>
            ))}
          </div>
        </div>

        <div className='flex gap-12'>
          <Button className='p-6 font-bold bg-blue-700 hover:bg-blue-800 '>
            Visit Site
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Button>
          <Button variant="outline" className='p-6'>
            Save Tool
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </Button>
          <Button variant="outline" className='p-6'>
            Compare
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </Button>
        </div>

        {(contextBenefits.length > 0 || integrationBenefits.length > 0) && (
          <div className=''>
            <h3 className='font-bold'>Why It Fits Your Needs</h3>
            <div className='flex justify-between'>
              {contextBenefits.length > 0 && (
                <div>
                  <div>
                    <span>✓</span>
                    <h4>Perfect for Your Context</h4>
                  </div>
                  <ul>
                    {contextBenefits.map((benefit, idx) => (
                      <li key={idx}>
                        <span>→</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {integrationBenefits.length > 0 && (
                <div>
                  <div>
                    <span>🔗</span>
                    <h4>Integration Benefits</h4>
                  </div>
                  <ul>
                    {integrationBenefits.map((benefit, idx) => (
                      <li key={idx}>
                        <span>🔗</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecommendationItem;
