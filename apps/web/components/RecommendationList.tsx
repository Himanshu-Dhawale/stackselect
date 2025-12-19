import React from 'react';
import RecommendationItem, { RecommendationItemProps } from './RecommendationItem';

export interface RecommendationListProps {
  recommendations: RecommendationItemProps[];
}

const RecommendationList: React.FC<RecommendationListProps> = ({ recommendations }) => {
  if (recommendations.length === 0) {
    return (
      <div>
        <p>No recommendations available.</p>
      </div>
    );
  }

  return (
    <div>
      {recommendations.map((recommendation, index) => (
        <RecommendationItem
          key={index}
          {...recommendation}
        />
      ))}
    </div>
  );
};

export default RecommendationList;
