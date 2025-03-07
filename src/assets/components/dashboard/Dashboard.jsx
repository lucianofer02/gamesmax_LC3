import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar';
import { Col,  Row } from 'react-bootstrap';
import NewGame from '../newGame/NewGame';
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

    // const appGameHandler = useCallback(
    //     (game) => {
    //         setGames((prevGames) => [game, ...prevGames]);
    //         setGamesFiltered((prevGames) => [game, ...prevGames]);

    //         const newGameId = games[games.length - 1].id + 1;

    //         fetch("http://localhost:3002/games", {
    //             method: "POST",
    //             headers: {
    //               "content-type": "application/json",
    //             },
                
    //     body: JSON.stringify({
    //       id: newGameId,
    //       title: game.title,
    //       genre: game.genre,
    //       price: game.price,
    //     }),
    //   })
    //   .then((response) => {
    //     if (response.ok) return response.json();
    //     else {
    //       throw new Error("The response had some erroes")
    //     }
    //   })
    //   .then(() => {
    //     const newGameArray = [{ ...game, id: newGameId }, ...games];
    //     setGames(newGameArray);
    //     setGamesFiltered(newGameArray);
    //   })
    //     }, [games])

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