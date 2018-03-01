import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery';

// commenting out until I can fix full gallery view
// import FullGallery from '../components/FullGallery';

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/01.jpg'
import thumb03 from '../assets/images/thumbs/01.jpg'
import thumb04 from '../assets/images/thumbs/01.jpg'
import thumb05 from '../assets/images/thumbs/01.jpg'
import thumb06 from '../assets/images/thumbs/01.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import fidelity from '../assets/images/fidelity.png'
import davidlindahlphoto from '../assets/images/davidlindahlphoto.png'
import capitalone from '../assets/images/capitalone.png'
import blackberrycentral from '../assets/images/blackberrycentral.png'
import sharebuilder from '../assets/images/sharebuilder.gif'

import avatar from '../assets/images/mountain-avatar.png'

const NOTEWORTH_PROJECTS = [
    { 
        id: '1', 
        src: full01, 
        url: `http://www.intellisoundai.com/`,
        thumbnail: thumb01, 
        caption: 'intelliSoundAI', 
        description: 'Designed the UI and spearheaded front-end development for this machine learning project where a user can choose a wave file and train a neural network.'
    },
    { 
        id: '2', 
        src: full02, 
        url: `https://madewithspark.com/`,
        thumbnail: thumb02, 
        caption: 'Made With Spark', 
        description: 'A curated collection of projects made with Laravel Spark scaffolding.'
    },
    { 
        id: '3', 
        src: full03, 
        url: `https://rainierwatch.com/`,
        thumbnail: thumb03, 
        caption: 'Rainier Watch', 
        description: 'An online community of thousands whose mission is to inform the PNW when The Mountain (Mount Rainier) is out.'
    },
    { 
        id: '4', 
        src: full04, 
        url: `https://trendingwordsofreddit.herokuapp.com/`,
        thumbnail: thumb04, 
        caption: 'Trending Words of Reddit', 
        description: 'An online tool that renders the top posts in real time from a top 25 Subreddit of choice and then builds a wordcloud based on the titles of the subreddit posts.'
    }
];


const FULL_GALLERY = [
    { 
        id: '1', 
        src: full01, 
        url: `http://www.intellisoundai.com/`,
        thumbnail: thumb01, 
        caption: 'intelliSoundAI', 
        description: 'Designed the UI and spearheaded front-end development for this machine learning project where a user can choose a wave file and train a neural network.'
    },
    { 
        id: '2', 
        src: full02, 
        url: `https://madewithspark.com/`,
        thumbnail: thumb02, 
        caption: 'Made With Spark', 
        description: 'A curated collection of projects made with Laravel Spark scaffolding.'
    },
    { 
        id: '3', 
        src: full03, 
        url: `https://rainierwatch.com/`,
        thumbnail: thumb03, 
        caption: 'Rainier Watch', 
        description: 'An online community of thousands whose mission is to inform the PNW when The Mountain (Mount Rainier) is out.'
    },
    { 
        id: '4', 
        src: full04, 
        url: `https://trendingwordsofreddit.herokuapp.com/`,
        thumbnail: thumb04, 
        caption: 'Trending Words of Reddit', 
        description: 'An online tool that renders the top posts in real time from a top 25 Subreddit of choice and then builds a wordcloud based on the titles of the subreddit posts.'
    },
    { 
        id: '5', 
        src: full05, 
        url: ``,
        thumbnail: thumb05, 
        caption: 'Ghostown', 
        description: 'A text-based choose your own adventure game myself and 2 other developers built from scratch using vanilla Javascript, HTML and CSS in less than a week.'
    },
    { 
        id: '6', 
        src: full05, 
        url: `https://cornbeansbetas.com/`,
        thumbnail: thumb05, 
        caption: 'Corn, Beans, & Betas', 
        description: `A blog built on WordPress hosting informative posts about Iowa's economics, Iowa's economic forecasts based on data and other random musings.`
    },
    { 
        id: '7', 
        src: full06, 
        url: `http://stop32.org/`,
        thumbnail: thumb06, 
        caption: 'Stop32 Photography Club', 
        description: 'The future digital home of a photography club I cofounded in 2009 and plan on reviving someday.'
    },
    { 
        id: '8', 
        src: full06, 
        url: `http://seattleadventureclub.org/`,
        thumbnail: thumb06, 
        caption: 'Seattle Adventure Club', 
        description: `Seattle's premier adventure club, also awaiting a full-scale launch.`
    },
    { 
        id: '9', 
        src: full06, 
        url: `https://ultimatejobsearchkanban.carrd.co/`,
        thumbnail: thumb06, 
        caption: 'The Ultimate Job Search Kanban', 
        description: `A trello template I made for organizing a job search after hours of research.`
    }
]
    

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        // let displayFullGallery = (FULL_GALLERY) => {
        //     if (!FULL_GALLERY) return;

        //     const gallery = FULL_GALLERY.map((obj, i) => {
        //         return (
        //             <article className="6u 12u$(xsmall) work-item" key={i}>
        //                 <a
        //                     className="image fit thumb"
        //                     href={obj.url}
        //                     target= "_blank"
        //                 >
        //                     <img src={obj.thumbnail} />
        //                 </a>

        //                 <h3><a href={obj.url} target="_blank">{obj.caption}</a></h3>
        //                 <p>{obj.description}</p>
        //             </article>
        //         );
        //     });

        //     return (
        //         <div className="row">
        //             {gallery}
        //         </div>
        //     );
        // }

        return (
            <div>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Greetings! My name is David and I have a passion for building beautiful digital things.</h2>
                        </header>
                        <p>Currently, I am moonlighting as a Web Design Consultant and Front-end Developer at <a href="https://lindahlstudios.com" target="_blank">lindahl studios</a> and photographer at <a href="https://davidlindahlphoto.com" target="_blank">David Lindahl Photography</a>. As a digital creator, I love crafting digital brands and compelling digital solutions and have many side projects to prove it.</p>
                        <ul className="actions">
                            <li><a href="https://austriker27.github.io/resume/" className="button">Resume</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Projects</h2>

                        <Gallery images={FULL_GALLERY} />

                        <ul className="actions">
                            <li><a href="https://github.com/austriker27" target="_blank" className="button">My Github</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>I'm always looking for new and exciting opportunities especially if it involves startups, compelling brands and missions to serve humans. Feel free to reach out on Twitter (if you want a quick response) or email (if you want a slow response). </p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="fa fa-home"></h3>
                                        Seattle<br />
                                        The <span className="fas fa-umbrella"></span> PNW <br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="fab fa-telegram"></h3>
                                        <a href="www.telegram.com/austrikerch">Telegram</a>
                                    </li>
                                    <li>
                                        <h3 className="fas fa-envelope"></h3>
                                        <a href="mailto:hello@davidalindahl.com">hello@davidalindahl.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="three">
                        <h2>Prior Experiences</h2>
                        <p>My prior experiences an an Anti-Money Laundering Investigator, student of Economics and freelance Photographer have equipped me with a refined problem solving ability, data driven mindset, and eye for visual aesthetics. </p>
                        <ul className="">
                            <li className="12u 12u$(small) row">
                                <img src={davidlindahlphoto} alt="an avatar picture of me backpacking in the mountains" />
                                <h4> <a href="#" target="_blank"> David Lindahl Photography </a> </h4>
                                <p> 8+ years of Freelance Photography</p>
                            </li>

                            <li className="12u 12u$(small) row">
                                <img src={capitalone} alt="an avatar picture of me backpacking in the mountains" />
                                <h4> <a href="https://capitalone.com" target="_blank"> Capital One </a> </h4>
                                <p> ~2 years of Anti-Money Laundering Investigator</p>
                            </li>

                            <li className="12u 12u$(small) row">
                                <img src={sharebuilder} alt="an avatar picture of me backpacking in the mountains" />
                                <h4> <a href="https://en.wikipedia.org/wiki/Sharebuilder" target="_blank"> ShareBuilder </a> </h4>
                                <p> 3+ years of Operations Analyst at a Financial Services Startup</p>
                            </li>                      

                            <li className="12u 12u$(small) row">
                                <img src={blackberrycentral} alt="an avatar picture of me backpacking in the mountains" />
                                <h4> <a href="https://blackberrycentral.com" target="_blank"> BlackBerryCentral </a> </h4>
                                <p> 2+ Years of Technology Media Reporting at a startup </p>
                            </li>

                            <li className="12u 12u$(small) row">
                                <img src={fidelity} alt="an avatar picture of me backpacking in the mountains" />
                                <h4> <a href="https://fidelity.com" target="_blank"> Fidelity Investments </a> </h4>
                                <p> ~1 Year of International Trading Experience </p>
                            </li>
                        </ul>

                    </section>

                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`