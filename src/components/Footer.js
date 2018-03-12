import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/austriker27"  target="_blank" className="fab fa-twitter fa-lg"></a></li>
                        <li><a href="https://github.com/austriker27"  target="_blank" className="fab fa-github fa-lg"></a></li>
                        <li><a href="https://dribbble.com/austriker"  target="_blank" className="fab fa-dribbble fa-lg"></a></li>
                        <li><a href="http://instagram.com/austriker"  target="_blank" className="fab fa-instagram fa-lg"></a></li>
                        <li><a href="https://medium.com/@austriker"  target="_blank" className="fab fa-medium-m fa-lg"></a></li>
                        <li><a href="https://www.linkedin.com/in/davidalindahl/"  target="_blank" className="fab fa-linkedin fa-lg"></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; 2018 David A. Lindahl</li><li>Crafted with <span className="fas fa-heart"></span> using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a> </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
