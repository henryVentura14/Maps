import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_organizations } from '../../actions/action_fetch_api'
import Card from '../Cards/Card'
import Navbar from './Navbar'
import Loading from '../Loading/Loading'

const ContentCards = () => {
    // variable of the hook dispatch
    const dispatch = useDispatch();

    // variable of the hook useSelector
    const result = useSelector((state) => state.reducer_fetch_api.result)
    const loading = useSelector((state) => state.reducer_fetch_api.loading)

    const images = [
        "https://cf.bstatic.com/images/hotel/max1024x768/179/179765563.jpg",
        "https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2017/11/24065412/cielo-oscuro-768x604.jpg",
        "https://cf.bstatic.com/images/hotel/max1024x768/116/116630892.jpg"
    ]
    const image = images.map((img, i) =>
        <img
            key={i}
            src={img}
            alt="description"
            className='modal-button'
        />
    );
    // We use the hook to load make the query when loading the component
    useEffect(() => {
        dispatch(fetch_organizations())
        //eslint-disable-next-line
    }, [])
    if (result.length === 0) return (<Loading />)
    return (
        <Fragment>
            <Navbar />
            {!loading &&
                <section className='containerCards'>
                    <div className='columns features'>
                        {result.length !== 0 &&
                            result.map((result, i) => (
                                <Card
                                    key={i + result.name}
                                    result={result}
                                    image={image[i]}
                                />
                            ))}
                    </div>
                </section>
            }
            {loading &&
                <Loading />
            }

        </Fragment>
    )
}

export default ContentCards;