import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const Teams = () => {
  const {team}=useParams();
  console.log(team)
  const [teamData, setTeamData] = useState([]);
  
    useEffect(() => {
      const leagueData = async () => {
        try {
          const teamDetails = await fetch(
            `https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=${team}`
          );
          const response = await teamDetails.json();
          const data = await response.player;
          setTeamData(data);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      };
      leagueData();
    }, [team]);
  return (
    <div>
      <Navbar />
      
    </div>
  );
};

export default Teams;