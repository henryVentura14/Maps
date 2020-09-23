import React, { useEffect, Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetch_articles } from '../../actions/action_fetch_api'
import { useParams } from "react-router-dom";
import Loading from '../Loading/Loading'
import ArticleCards from '../Article/ArticleCards'
import Navbar from './Navbar'

const ContentArticle = () => {
    let { slug } = useParams();

    // variable of the hook dispatch
    const dispatch = useDispatch();

    // variable of the hook useSelector
    const articles = useSelector((state) => state.reducer_fetch_api.articles)
    const loading = useSelector((state) => state.reducer_fetch_api.loading)

    useEffect(() => {
        dispatch(fetch_articles(slug))
        //eslint-disable-next-line
    }, [])

    if (articles.length === 0) return (<Loading />)
    return (
        <Fragment>
            <Navbar />
            {!loading &&
                <div className="center">
                    <div className="container features">
                        <div className="row columns is-multiline ml-5">
                            {articles.length !== 0 &&
                                articles.map((result, i) =>
                                    <ArticleCards
                                        key={result.id}
                                        result={result} />
                                )}
                        </div>
                    </div>
                </div>
            }
            {loading &&
                <Loading />
            }

        </Fragment>

    );
}

export default ContentArticle;