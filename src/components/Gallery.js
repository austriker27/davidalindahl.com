import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component {
    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="work-item websites" key={i}>
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
                {gallery}
            </div>
        );
    }

    

    render () {
        return (
            <div>
                {this.renderGallery()}
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;