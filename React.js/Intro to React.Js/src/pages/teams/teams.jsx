import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { CircularProgress } from "@mui/material";
import PlayerCard from "../../components/Card/playerCard";
import { Grid } from "@mui/material";
const teams = () => {
  const { team } = useParams();
  const [teamData, setTeamData] = useState([]);
console.log(team)
  useEffect(() => {
    const playerData = async () => {
      try {
        const teamdetails = await fetch(
          `https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=${team}`
        );
        const response = await teamdetails.json();
        const data = await response.player;
        setTeamData(data);
      } catch (err) {
        console.log(err);
      }
    };
    playerData();
  }, [team]);
  return (
    <div>
      <Navbar />
      <h2>Team Details {teamData.length}</h2>
      <Grid container spacing={2}>
        {teamData.length > 0 ? (
          teamData.map((player) => (
            <PlayerCard key={player.idPlayer} player={player} />
          ))
        ) : ( 
          <CircularProgress />
        )}
      </Grid>
    </div>
  );
};

export default teams;
