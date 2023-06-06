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
          "tvShows": [
          "Once Upon a Time"
          ],
          "sourceUrl": "https://disney.fandom.com/wiki/King_Agnarr",
          "name": "King Agnarr",
          "imageUrl": "https://static.wikia.nocookie.net/disney/images/6/63/Profile_-_King_Agnarr_Frozen_2.jpg",
          "url": "https://api.disneyapi.dev/characters/138",
          },
          {
          "_id": 139,
          "films": [
          "The Lion King",
          "The Lion King (2019 film)"
          ],
          "tvShows": [],
          "sourceUrl": "https://disney.fandom.com/wiki/Ahadi",
          "name": "Ahadi",
          "imageUrl": "https://static.wikia.nocookie.net/disney/images/b/b3/Ahadihead.png",
          "url": "https://api.disneyapi.dev/characters/139",
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
          "tvShows": [],
          "sourceUrl": "https://disney.fandom.com/wiki/Air_Bud_(dog)",
          "name": "Air Bud",
          "imageUrl": "https://static.wikia.nocookie.net/disney/images/3/3c/Buddy_%28Air_Bud%29.png",
          "url": "https://api.disneyapi.dev/characters/140",
          },
          {
          "_id": 141,
          "films": [],
          "tvShows": [
          "TaleSpin",
          "DuckTales (2017 series)"
          ],
          "sourceUrl": "https://disney.fandom.com/wiki/Air_Pirates",
          "name": "Air Pirates",
          "imageUrl": "https://static.wikia.nocookie.net/disney/images/e/e1/Wallpaper_air_pirates_by_apmaddog-d3awjq1.jpg",
          "url": "https://api.disneyapi.dev/characters/141",
          },
      ]
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>GrandMouse</h1>
        <Characters characters={this.state.characters}/>
      </main>
    )
  }
}

export default App;