import './SingleCard.css'
import React from 'react'

function SingleCard({ card, handleChoice, flipped, disabled }) {  //props-destructure

    const handleClick = () =>{
        if(!disabled)
        {
            handleChoice(card)
        }
    }

  return (
    <div className='card'>
        <div className={flipped ? "flipped" : ""}>
            <img src={card.src} className="front" alt="card front" />
            <img 
                src="/images/cover.png" 
                alt="card back" 
                onClick={handleClick} 
                className="back" 
            />
        </div>
    </div>
  )
}

export default SingleCard