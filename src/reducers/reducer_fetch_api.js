import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_ONE,
  FETCH_ALL
} from '../types'

const initialState = {
  loading: false,
  results: [],
  result: [],
  error: '',
  articles: []
}
const reducer_fetch_api = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        result: action.payload,
        error: ''
      }
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        loading: false,
        results: [],
        error: action.payload
      }
    }
    case FETCH_ONE: {
      return {
        ...state,
        loading: false,
        results: action.payload,
        error: ''
      }
    }
    case FETCH_ALL: {
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: ''
      }
    }
    default:
      return state
  }
}
export default reducer_fetch_api
