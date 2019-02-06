import React from 'react'
import { Level } from './Level';

function PokeCard(props) {
    const { cardAction, card } = props
    const { hp_level, strength_level, happiness, weak_level, imageUrl, name } = card;
    return (
        <div className="card card-list__item">
            <div>
                <img src={imageUrl} className="card-list__item--image" />
            </div>
            <div className="card-list__item--right">
                <div>
                    <span>{name}</span>
                </div>
                <div>
                    <span>HP: {hp_level}</span>
                </div>
                <div>
                    <span>STR: {strength_level} %</span>
                </div>
                <div>
                    <span>WEAK: {weak_level} %</span>
                </div>
                <div>
                    <Level level={happiness} max={5} />
                </div>
            </div>
            <div>
                {cardAction}
            </div>
        </div>
    )
}

export { PokeCard }