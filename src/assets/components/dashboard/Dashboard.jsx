import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar';
import { Col,  Row } from 'react-bootstrap';
import Games from '../games/Games';
import GameFilter from '../gameFilter/GameFilter';

const Dashboard = () => {
    const [genreSelected, setGenreSelected] = useState("");
    const [games, setGames] = useState([]);
    const [gamesFiltered, setGamesFiltered] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/games", {
          headers: {
            accept: "application/json",
          },
    })
      .then((response) => response.json())
      .then((gameData) => {
        console.log(gameData);
        setGames(gameData);
        setGamesFiltered(gameData);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

    const appGenreHandler = (genre) => {
        setGenreSelected(genre);
        const gamesFiltered = games.filter(
          (games) => games.genre === genre
          );
        setGamesFiltered(gamesFiltered);
    }

  return (
    <>
        <Row>
            <Col>
                <Navbar />
            </Col>
        </Row>
        <br />
        <div>
            <GameFilter genreSelected={genreSelected} onGenreChange={appGenreHandler}/>
            <Games genreSelected={genreSelected} games={gamesFiltered}/>
        </div>
    </>
  )
}

export default Dashboard;