import React, { useContext } from 'react'
import './Home.css'
import MainContext from '../../../context/context'
import Loading from '../../Loading/Loading'
import Cards from '../../../components/site/Cards/Cards'

const Home = () => {
  const{data, loading}=useContext(MainContext)
  return (
    <main>
      <section>
        <div className="first__section">
          <h1><b>Shop in style</b></h1>
          <p>With this shop homepage template</p>
        </div>
      </section>
      {
        loading? <Loading/>: <Cards cardsInfos={data}/>
      }
    </main>
  )
}

export default Home