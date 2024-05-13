import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='error__page'>
            <div class="container">
                <div class="gif">
                    <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
                </div>
                <div class="content">
                    <h1 class="main-heading">This page is gone.</h1>
                    <p>
                        ...maybe the page you're looking for is not found or never existed.
                    </p>
                    <Link to='/' target="blank">
                        <button>Back to home <i class="far fa-hand-point-right"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Error