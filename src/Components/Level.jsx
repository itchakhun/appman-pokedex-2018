import React from 'react'
import levelPng from './assets/cute.png'

function Level(props) {
const { level, max } = props;
  return (
    <ul className="level">
      {
        [...Array(level)].filter((_,i) => i < max).map(() => 
          <li className="level__item"><img className="level__item__icon" src={levelPng} /></li>
        )
      }
    </ul>
  )
}

export { Level }