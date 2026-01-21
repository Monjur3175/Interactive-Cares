import React from 'react';
import { useParams } from 'react-router-dom';

const Teams = () => {
  const {team}=useParams();
  console.log(team)
  return (
    <div>
      Team
    </div>
  );
};

export default Teams;