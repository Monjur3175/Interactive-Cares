import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";


export default function TeamCard({team}) {
    console.log(team);
  return (
    <Grid size={4}>
      <Card sx={{ maxWidth: 345,height:800 }}>
        <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={team.strTeam}
        subheader={`${team.strAlternate},${team.strLocation}`}
      />
      <CardMedia
        component="img"
        image={team.strBadge}
        alt={team.strTeam}
      />
        <CardContent sx={{height:200,overflow:'auto'}}>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary"}}
          >
            {team.strDescriptionEN}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Link to={`/leagues/${team.strTeam}/${team.stridTeam}`}>
            <Button size="small">See Details</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
