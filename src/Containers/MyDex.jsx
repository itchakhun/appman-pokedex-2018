import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, PokeCard } from '../Components'
import { getAllCards } from '../Redux/actions/cardActions'

class MyDex extends Component {
  state = {
    show: false,
    cards: [],
  }

  handleShow = (show) => {
    this.setState({ show })
  }

  handleRemove = (index) => {
    const { cards } = this.state;
    const returnCards = cards.filter((c, i) => i !== index);
    this.setState({ cards: returnCards })
  }

  addCard = (card) => {
    const { cards } = this.state;
    this.setState({
      show: false,
      cards: [...cards, card]
    })
  }

  render() {
    const { show, cards } = this.state;
    return (
      <div className="my-dex">
        <h2 className="text-center">My Pokedex</h2>
        <div>
          <div className="card-list">
              {cards.map((card, i) => (
                  <PokeCard key={card.id} cardAction={<Button content="Remove" onClick={() => this.handleRemove(i)} />} className="card-list__item" card={card} />
              ))}
              <div className="card-list__item" />
          </div>
        </div>
        <div className="text-center">
          <Button content="Add new Pokemon" onClick={() => this.handleShow(!show)} />
        </div>
        <Modal selectedCards={cards} show={show} onClose={() => this.handleShow(false)} onSelectCard={this.addCard} />
      </div>
    )
  }
}

const mapState = ({card}) => ({ card })

export default connect(mapState, { getAllCards })(MyDex)