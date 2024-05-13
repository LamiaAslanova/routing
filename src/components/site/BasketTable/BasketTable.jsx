import React from 'react'
import BasketTableItem from '../BasketTableItem/BasketTableItem'
import { useContext } from 'react'
import MainContext from '../../../context/context'

const BasketTable = () => {
    const { basketItems } = useContext(MainContext)
    let sum=0
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                        <th scope="col">Count</th>
                        <th scope="col">Count</th>
                        <th scope="col">Totalprice</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basketItems.map((item, index) => {
                            sum+=item.totalPrice
                            return <BasketTableItem key={index} item={item} index={index}/>
                        })
                    }
                </tbody>
            </table>
            <h1>Total Price:{sum}</h1>
        </>
    )
}

export default BasketTable