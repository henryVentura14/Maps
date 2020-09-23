import React from 'react';
import { Link } from 'react-router-dom'

const Card = ({ result, image }) => {
    console.log(result)
    return (

        <div className='card is-shady'>
            <div className='card-image'>
                <figure className='image is-4by3'>
                    {image}
                </figure>
            </div>
            <div className='card-content'>
                <div className='content'>
                    <h4>{result.name}</h4>
                    <p>
                        {result.description}
                    </p>
                    <Link
                    to={`/articles/${result.url_slug}`}
                     className='button is-link modal-button'>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;