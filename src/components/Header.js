import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/mountain-avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am David Lindahl</strong><br />
                    Full Stack JavaScript Developer<br />
                    Design Enthusiast<br />
                    Freelance Photographer<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
