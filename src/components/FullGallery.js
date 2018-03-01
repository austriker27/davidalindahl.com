import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

import thumb05 from '../assets/images/thumbs/placeholder.jpg'
import thumb06 from '../assets/images/thumbs/placeholder.jpg'

import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import Gallery from '../components/Gallery';


const FULL_GALLERY = [
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

class FullGallery extends Component {
    renderFullGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        href={obj.url}
                        target= "_blank"
                    >
                        <img src={obj.thumbnail} />
                    </a>

                    <h3><a href={obj.url} target="_blank">{obj.caption}</a></h3>
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <div className="row">
              {this.renderFullGallery()}
            </div>
        );
    }

    

    render () {
        return (
            <div>
            <Gallery images={FULL_GALLERY} />

                
            </div>
        );
    }
}

FullGallery.displayName = 'FullGallery';
FullGallery.propTypes = {
    images: PropTypes.array
};

export default FullGallery;