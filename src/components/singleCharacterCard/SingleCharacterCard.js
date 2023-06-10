import { Component } from 'react';
import acquireInfo from '../../apiCalls';
import './SingleCharacterCard.css';
import PropTypes from "prop-types";

class SingleCharacterCard extends Component {
  constructor() {
    super();
    this.state = {
      singleCharacter: null
    };
  };

  componentDidMount() {
    acquireInfo(`/${this.props.characterId}`)
    .then(data => {
      this.setState({ singleCharacter: data.data })
    })
    .catch(() => {
      this.setState({ error: "Something went worng, please try again!" })
    })
  };

  render() {
    return this.state.singleCharacter && (
    <div className="single-character-card">
      <img className="single-img"src={this.state.singleCharacter.imageUrl} />
      <div className="character-info">
        <h2 className="character-name">{this.state.singleCharacter.name}</h2>
        {this.state.singleCharacter.films.length === 0 ? (<p>No films yet!</p>) : (<p>Films:   {this.state.singleCharacter.films}</p>)}
        {this.state.singleCharacter.tvShows.length === 0 ? (<p>No TV Shows yet!</p>) : (<p>TV Shows:   {this.state.singleCharacter.tvShows}</p>)}
      </div>
    </div>
    );
  };
};

export default SingleCharacterCard;

SingleCharacterCard.propTypes = {
  character: PropTypes.object
}