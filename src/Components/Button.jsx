import React from 'react'

export const Button = (props) => {
    const { content, onClick } = props;
  return (
    <button className="button" onClick={onClick}>
      {content}
    </button>
  )
}
