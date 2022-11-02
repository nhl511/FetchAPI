import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function Players() {
  //   const [APIData, setAPIData] = useState([]);
  //   const baseURL = `https://635fe664ca0fe3c21aa783b3.mockapi.io/players`;
  //   useEffect(() => {
  //     fetch(
  //       baseURL
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error(`HTTP Status: ${response.status}`);
  //           }
  //           return response.json();
  //         })
  //         .then((data) => {
  //           setAPIData(data);
  //         })
  //         .catch((error) => console.log(error.message))
  //     );
  //   }, []);

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://635fe664ca0fe3c21aa783b3.mockapi.io/players`)
      .then((res) => {
        console.log(res);
        setPlayers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   return(
  //     <div>
  //         <ul>
  //             {
  //                 players.map(player => <li key={player.id}>{player.name}</li>)
  //             }
  //         </ul>
  //     </div>

  //   )
  return (
    <Grid container pl={10} pr={10}>
      {players.map((player) => (
        <Grid item xs={4} key={player.id} pr={2} pt={2} pb={2}>
          <Card>
            <CardMedia
              component="img"
              height="240"
              image={player.img}
              alt={player.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {player.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {player.club}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">{player.nation}</Button>
              <Button size="small">Detail</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
export default Players;
