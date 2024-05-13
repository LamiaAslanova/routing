import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import BasketTable from '../../../components/site/BasketTable/BasketTable'
import Loading from '../../Loading/Loading'

const Basket = () => {
    const { loading } = useContext(MainContext)
    return (
        <div>
            {
                loading ? <Loading /> : <BasketTable />
            }
        </div>
    )
}

export default Basket