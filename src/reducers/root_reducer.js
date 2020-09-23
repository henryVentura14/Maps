import { combineReducers } from 'redux'
import reducer_fetch_api from './reducer_fetch_api'

const root_reducers = combineReducers({
    reducer_fetch_api,
})

export default root_reducers;