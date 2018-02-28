import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon fa-medium"><span className="label">Medium</span></a></li>
                        <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; 2018 David A. Lindahl</li><li>Crafted with <span className="icon fa-heart"></span> in Seattle using GatsbyJS </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
