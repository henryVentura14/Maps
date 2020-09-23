import React from 'react';
import { Link } from 'react-router-dom'

const ArticlesCards = ({ result }) => {

    return (
        <div v-for="card in cardData" className="column is-4">
            <div className="card large is-shady">
                <div className="card-image">
                    <figure className="image is-16by9">
                        <img src={result.thumbnail_3} alt="Image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">

                        <div className="media-content">
                            <p>
                                <span className="title is-6">

                                    <Link
                                        to={`/article/${result.url_slug}`}>
                                        {result.title}
                                    </Link>

                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="card-content content ellipsis">
                        {result.caption}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ArticlesCards;