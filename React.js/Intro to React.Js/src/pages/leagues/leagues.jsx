import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import TeamCard from "../../components/Card/TeamCard";
import { Grid } from "@mui/material";
const leagues = () => {
  const { name } = useParams();
  const [LeagueData, SetLeagueData] = useState([]);

  useEffect(() => {
    const leagueData = async () => {
      try {
        const league = await fetch(
          `https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=${name}`
        );
        const response = await league.json();
        const data = await response.teams;
        SetLeagueData(data);
      } catch (err) {
        console.log(err);
      }
    };
    leagueData();
  }, [name]);
  return (
    <div>
      <Navbar />
      <h2>Total Teams {LeagueData.length}</h2>
      <Grid container spacing={2}>
        {LeagueData.length > 0 ? 
          LeagueData.map(team => <TeamCard key={team.idTeam} team={team} />)
        : 
          <CircularProgress />
        }
      </Grid>
    </div>
  );
};

export default leagues;
