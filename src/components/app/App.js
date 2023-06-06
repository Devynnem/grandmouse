import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import Characters from '../characters/Characters';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [
        {
          "_id": 138,
          "films": [
          "Frozen",
          "Ralph Breaks the Internet",
          "Frozen II"
          ],
          "shortFilms": [
          "Olaf's Frozen Adventure"
          ],
          "tvShows": [
          "Once Upon a Time"
          ],
          "videoGames": [],
          "parkAttractions": [
          "Frozen: Live at the Hyperion"
          ],
          "allies": [],
          "enemies": [],
          "sourceUrl": "https://disney.fandom.com/wiki/King_Agnarr",
          "name": "King Agnarr",
          "imageUrl": "https://static.wikia.nocookie.net/disney/images/6/63/Profile_-_King_Agnarr_Frozen_2.jpg",
          "createdAt": "2021-04-12T01:31:46.567Z",
          "updatedAt": "2021-12-20T20:39:18.877Z",
          "url": "https://api.disneyapi.dev/characters/138",
          "__v": 0
          },
          {
          "_id": 139,
          "films": [
          "The Lion King",
          "The Lion King (2019 film)"
          ],
          "shortFilms": [],
          "tvShows": [],
          "videoGames": [],
          "parkAttractions": [],
          "allies": [],
          "enemies": [],
          "sourceUrl": "https://disney.fandom.com/wiki/Ahadi",
          "name": "Ahadi",
          "imageUrl": "https://static.wikia.nocookie.net/disney/images/b/b3/Ahadihead.png",
          "createdAt": "2021-04-12T01:31:47.129Z",
          "updatedAt": "2021-12-20T20:39:18.877Z",
          "url": "https://api.disneyapi.dev/characters/139",
          "__v": 0
          },
          {
          "_id": 140,
          "films": [
          "Air Bud",
          "Air Bud: Golden Receiver",
          "Air Bud: World Pup",
          "Air Bud: Seventh Inning Fetch",
          "Air Bud: Spikes Back",
          "Air Buddies",
          "Snow Buddies",
          "Space Buddies",
          "Santa Buddies",
          "Ralph Breaks the Internet"
          ],
          "shortFilms": [],
          "tvShows": [],
          "videoGames": [],
          "parkAttractions": [],
          "allies": [],
          "enemies": [],
          "sourceUrl": "https://disney.fandom.com/wiki/Air_Bud_(dog)",
          "name": "Air Bud",
          "imageUrl": "https://static.wikia.nocookie.net/disney/images/3/3c/Buddy_%28Air_Bud%29.png",
          "createdAt": "2021-04-12T01:31:47.646Z",
          "updatedAt": "2021-12-20T20:39:18.877Z",
          "url": "https://api.disneyapi.dev/characters/140",
          "__v": 0
          },
          {
          "_id": 141,
          "films": [],
          "shortFilms": [],
          "tvShows": [
          "TaleSpin",
          "DuckTales (2017 series)"
          ],
          "videoGames": [],
          "parkAttractions": [],
          "allies": [],
          "enemies": [],
          "sourceUrl": "https://disney.fandom.com/wiki/Air_Pirates",
          "name": "Air Pirates",
          "imageUrl": "https://static.wikia.nocookie.net/disney/images/e/e1/Wallpaper_air_pirates_by_apmaddog-d3awjq1.jpg",
          "createdAt": "2021-04-12T01:31:48.509Z",
          "updatedAt": "2021-12-20T20:39:18.877Z",
          "url": "https://api.disneyapi.dev/characters/141",
          "__v": 0
          },
      ]
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>GrandMouse</h1>
        <Characters />
      </main>
    )
  }
}

export default App;