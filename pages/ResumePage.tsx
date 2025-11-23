import React from 'react';
import Inventory from '../components/Inventory';
import QuestLog from '../components/QuestLog';

const ResumePage: React.FC = () => {
  return (
    <div className="pb-20">
      <QuestLog />
      <Inventory />
    </div>
  );
};

export default ResumePage;