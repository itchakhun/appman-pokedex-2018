import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Card, Button, PokeCard } from './index';
import { getAllCards } from '../Redux/actions/cardActions';

class CardModal extends Component {
    state = {
        searchTerm: '',
    }

    componentDidMount = () => {
        this.props.getAllCards();
      }

    handleSearch = (e) => {
        e.preventDefault();
        this.setState({ searchTerm: e.target.value })
    }

    handleSelectCard = (card) => {
        this.props.onSelectCard(card)
    }

    render() {
        const {searchTerm} = this.state;
        const { show, onClose, card, selectedCards } = this.props;
        if (!show) {
            return null
        }
        const displayCards = card.cards.filter(c => {
            const { type, name } = c;
            const selected = selectedCards.find(s => s.id === c.id)
            return (type.toLowerCase().includes(searchTerm.toLowerCase()) || name.toLowerCase().includes(searchTerm.toLowerCase())) && !selected;
        })
        return (
        <div className="modal-container">
            <input onChange={this.handleSearch} value={searchTerm} class="card__search-input card" placeholder="Search Pokemon" />
            <div className="bg-white card">
            <div className="card-list">
                {displayCards.map(card => (
                    <PokeCard cardAction={<Button content="Add" onClick={() => this.handleSelectCard(card)} />} className="card-list__item" card={card} />
                ))}
                <div className="card-list__item" />
            </div>
            </div>
            <div className="text-center">
                <Button onClick={onClose} content="CLOSE" />
            </div>
        </div>
        )
    }
}

const mapState = ({ card }) => ({ card })

const Modal = connect(mapState, { getAllCards })(CardModal)

export { Modal }