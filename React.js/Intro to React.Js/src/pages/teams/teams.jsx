/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const teams = () => {
  const { team } = useParams();
  console.log(team);
    const [teamData, setTeamData] = useState();
  
    useEffect(() => {
      const playerData = async () => {
        try {
          const teamdetails = await fetch(
            `https://www.thesportsdb.com/api/v1/json/123/search_all_players.php?id=${team}`
          );
          const response = await teamdetails.json();
          const data = await response.palyer;
          setTeamData(data);
        } catch (err) {
          console.log(err);
        }
      };
      playerData();
    }, [team]);
  return <div>
    <Navbar />
    <h2>Team Details {teamData.length}</h2>
  </div>;
};

export default teams;
