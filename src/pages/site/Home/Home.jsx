import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <main>
      <section>
        <div className="first__section">
          <h1><b>Shop in style</b></h1>
          <p>With this shop homepage template</p>
        </div>
      </section>
      <section>
        <div className="second__section">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div class="card" style={{ width: '18rem' }}>
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Price</p>
                    <button class="btn btn-outline-dark">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home