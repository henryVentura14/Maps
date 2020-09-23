import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetch_article } from '../../actions/action_fetch_api'
import { useParams } from "react-router-dom";
import Loading from '../Loading/Loading'
import Map from '../Maps/Map'

const Article = () => {
    let { slug } = useParams();
    //estate
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    // variable of the hook dispatch
    const dispatch = useDispatch();

    // variable of the hook useSelector
    const article = useSelector((state) => state.reducer_fetch_api.results)
    const loading = useSelector((state) => state.reducer_fetch_api.loading)

    useEffect(() => {
        dispatch(fetch_article(slug))
        // setLat(article.places.latlng[0])
        // setLng(article.places.latlng[1])
        //eslint-disable-next-line
    }, [])
    const {places}=article
    console.log(places)
    return (
        <React.Fragment>
            {!loading &&
                <div className="center">
                    <div className="left">
                        <h1 className="title has-text-dark">{article.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: article.body }} />
                    </div>

                    <div className="right">

                        <Map places={article.places} />

                    </div>
                </div>
            }
            {loading &&
                <Loading />
            }
        </React.Fragment>
    );
}


export default Article;