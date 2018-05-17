import React from 'react'

import './Card.css'
import PropTypes from 'prop-types'

// La fonction Card ici…



// eslint-disable-next-line
const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, onClick }) => (
    <div className={`card ${feedback}`}  onClick={() => onClick(card)}>
      <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </div>
  ) 
  Card.propTypes = {
    card: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
      'hidden',
      'justMatched',
      'justMismatched',
      'visible',
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
  }
export default Card
