import React, { Component } from 'react'
import { PokeCard } from '../Components'

class CardList extends Component {
  componentDidMount = () => {
    // this.props.getAllCards();
  }
  render() {
    const {cards} = this.props;
    return (
      <ul className="card-list">
        {cards.map(card => (
          <PokeCard className="card-list__item" card={card} />
        ))}
      </ul>
    )
  }
}

const mapState = (state) => ({
  cards: state.card.cards,
})

export default CardList