import React from 'react'
import Card from '../Card/Card'

const Cards = ({cardsInfos}) => {
    return (
        <section>
        <div className="second__section">
          <div className="container">
            <div className="row">
              {
                cardsInfos.map((cardInfo, index)=>{
                    return(
                        <Card key={index} cardInfo={cardInfo}/>
                    )
                })
              }
            </div>
          </div>
        </div>
      </section>
        
    )
}

export default Cards