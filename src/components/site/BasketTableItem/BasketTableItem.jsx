import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const BasketTableItem = ({item, index}) => {
    const{basketItems, setBasketItems}=useContext(MainContext)

    const removeFromBasket = (item) =>{
        const target = basketItems.find(x=>x.item.id==item.item.id)
        if(target.count>1){
            target.count-=1
            target.totalPrice-=item.item.price
            setBasketItems([...basketItems])
            localStorage.setItem("basketItems", JSON.stringify([...basketItems]))
        }
        else{
            setBasketItems([...basketItems.filter(x=>x.item.id!==target.item.id)])
            localStorage.setItem("basketItems", JSON.stringify([...basketItems.filter(x=>x.item.id!==target.item.id)]))
        }
    }

    const increaseBasketItem = () => {
        const target =basketItems.find(x=>x.item.id==item.item.id)
        target.count+=1
        target.totalPrice+=item.item.price
        setBasketItems([...basketItems])
        localStorage.setItem("basketItems", JSON.stringify([...basketItems]))
    }

    return (
        <>
            <tr>
                <th scope="row">{index+1}</th>
                <td><img width="100px" height="100px" src={item.item.image} alt="" /></td>
                <td>{item.item.name}</td>
                <td>{item.item.price} AZN</td>
                <td><button className="btn btn-danger" onClick={()=>removeFromBasket(item)}>Remove</button></td>
                <td>{item.count}</td>
                <td><button className="btn btn-primary" onClick={()=>increaseBasketItem(item)}>Add</button></td>
                <td>{item.totalPrice} AZN</td>
            </tr>
        </>
    )
}

export default BasketTableItem