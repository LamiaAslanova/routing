import React from 'react'
import { useContext } from 'react'
import MainContext from '../../../context/context'

const Card = ({ cardInfo }) => {
    const { basketItems, setBasketItems } = useContext(MainContext)

    const addToBasket = () => {
        const target = basketItems.find(x => x.item.id == cardInfo.id)
        if (!target) {
            let newBasketItem = {
                item: cardInfo,
                count: 1,
                totalPrice: cardInfo.price
            }
            setBasketItems([...basketItems, newBasketItem])
            localStorage.setItem("basketItems", JSON.stringify([...basketItems, newBasketItem]))
        }
        else{
            target.count+=1
            target.totalPrice+=cardInfo.price
            setBasketItems([...basketItems])
            localStorage.setItem("basketItems", JSON.stringify([...basketItems]))
        }
    }

    return (
        <div className="col-3">
            <div class="card mb-4" style={{ width: '18rem' }}>
                <img src={cardInfo.image} class="card-img-top" alt="photo" />
                <div class="card-body">
                    <h5 class="card-title">{cardInfo.name}</h5>
                    <p class="card-text">{cardInfo.description}</p>
                    <p class="card-text">Price: {cardInfo.price} AZN</p>
                    <button class="btn btn-outline-dark" onClick={()=>addToBasket(cardInfo)}>Add to Basket</button>
                </div>
            </div>
        </div>
    )
}

export default Card