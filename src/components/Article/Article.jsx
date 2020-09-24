import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetch_article } from '../../actions/action_fetch_api'
import { useParams } from "react-router-dom";
import Loading from '../Loading/Loading'
import Map from '../Maps/Map'

const Article = () => {
    let { slug } = useParams();

    // variable of the hook dispatch
    const dispatch = useDispatch();

    // variable of the hook useSelector
    const article = useSelector((state) => state.reducer_fetch_api.results)
    const loading = useSelector((state) => state.reducer_fetch_api.loading)

    const [latlng, setLatLng] = useState({
        lng: -72.0918118,
        lat: -15.6093241
    });

    const { lng, lat } = latlng
    useEffect(() => {
        dispatch(fetch_article(slug))
        //eslint-disable-next-line
    }, [])
    if (article.length === 0) return (<Loading />)
    return (
        <React.Fragment>
            {!loading &&
                <div className="center">
                    <div className="left">
                        <h1 className="title has-text-dark">{article.title}</h1>

                        {/* <img src={article.thumbnail_3} /> */}
                        <div className="content has-text-left">
                            {/* <p className="content has-text-dark">
                                {article.meta_description}
                            </p> */}
                            <ol type="I">
                                {article.places.length !== 0 &&
                                    article.places.map((plc, i) =>
                                        <li
                                            key={plc.id}
                                            className="li"
                                            title="see to map"
                                            onClick={() => setLatLng({ lng: plc.latlng[1], lat: plc.latlng[0] })}
                                        >{plc.name}</li>
                                    )
                                }
                            </ol>
                        </div>
                         <div className="has-text-black" dangerouslySetInnerHTML={{ __html: article.body }} />
                    </div>

                    <div className="right">
                        <Map latlng={latlng} lng={lng} lat={lat} setLatLng={setLatLng} />
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