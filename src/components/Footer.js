import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#" className="fab fa-twitter fa-lg"></a></li>
                        <li><a href="#" className="fab fa-github fa-lg"></a></li>
                        <li><a href="#" className="fab fa-dribbble fa-lg"></a></li>
                        <li><a href="#" className="fab fa-instagram fa-lg"></a></li>
                        <li><a href="#" className="fab fa-medium-m fa-lg"></a></li>
                        <li><a href="#" className="fab fa-linkedin fa-lg"></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; 2018 David A. Lindahl</li><li>Crafted with <span className="fas fa-heart"></span> in Seattle using GatsbyJS </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
