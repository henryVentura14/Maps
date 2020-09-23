// Actions config
import Axios from 'axios'
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_ONE,
  FETCH_ALL
} from '../types'

const fetch_request = () => {
  return {
    type: FETCH_REQUEST
  }
}

const fetch_success = resutls => {
  return {
    type: FETCH_SUCCESS,
    payload: resutls
  }
}

const fetch_one = resutls => {
  return {
    type: FETCH_ONE,
    payload: resutls
  }
}

const fetch_all = resutls => {
  return {
    type: FETCH_ALL,
    payload: resutls
  }
}

const fetch_failure = error => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
}

const fetch_organizations = () => {
  return dispatch => {
    dispatch(fetch_request())
    Axios.get('https://api.arrivedo.com/organizations', {
      headers: {
        Authorization:
          'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnJpdmVkbyIsImN1c3RvbWVyIjoiZjE5NmJmYjctMzU5NC00YTg4LTllY2MtODY5NmU3ZTk3M2QzIiwib3JnYW5pemF0aW9ucyI6WyJlMjdlNWMxZC0zMjg0LTRjZmEtOWEyNy1mMjQwMmU5Nzg4ZGMiLCJlZjA5OWZjMC02NTNkLTRjZmUtOWQ0Mi1hZTRmYzBhNTY0NzkiXSwib3JnYW5pemF0aW9uc19zbHVnIjpbInBhcml3YW5hLWhvc3RlbC1saW1hIiwiYmVsbW9uZC1sYXMtY2FzaXRhcyJdLCJyYXRlX2xpbWl0Ijo1MDAsInJhbmRvbSI6MTU3MDYzMDg2NX0.rdXa3PplEXHgLx3qCho3AGaIG97uZm_1j7jsfC2F-Qs'
      }
    })
      .then(res => {
        dispatch(fetch_success(res.data))
        //console.log(JSON.stringify(res.data))
      })
      .catch(error => {
        dispatch(fetch_failure(error + 'No result'))
        console.log(error)
      })
  }
}

const fetch_articles = slug => {
  return dispatch => {
    dispatch(fetch_request())
    Axios.get(`https://api.arrivedo.com/articles/${slug}`, {
      headers: {
        Authorization:
          'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnJpdmVkbyIsImN1c3RvbWVyIjoiZjE5NmJmYjctMzU5NC00YTg4LTllY2MtODY5NmU3ZTk3M2QzIiwib3JnYW5pemF0aW9ucyI6WyJlMjdlNWMxZC0zMjg0LTRjZmEtOWEyNy1mMjQwMmU5Nzg4ZGMiLCJlZjA5OWZjMC02NTNkLTRjZmUtOWQ0Mi1hZTRmYzBhNTY0NzkiXSwib3JnYW5pemF0aW9uc19zbHVnIjpbInBhcml3YW5hLWhvc3RlbC1saW1hIiwiYmVsbW9uZC1sYXMtY2FzaXRhcyJdLCJyYXRlX2xpbWl0Ijo1MDAsInJhbmRvbSI6MTU3MDYzMDg2NX0.rdXa3PplEXHgLx3qCho3AGaIG97uZm_1j7jsfC2F-Qs'
      }
    })
      .then(res => {
        dispatch(fetch_all(res.data))
      })
      .catch(error => {
        dispatch(fetch_failure(error + 'No result'))
        console.log(error)
      })
  }
}

const fetch_article = slug => {
  return dispatch => {
    dispatch(fetch_request())
    Axios.get(`https://api.arrivedo.com/article/${slug}`, {
      headers: {
        Authorization:
          'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcnJpdmVkbyIsImN1c3RvbWVyIjoiZjE5NmJmYjctMzU5NC00YTg4LTllY2MtODY5NmU3ZTk3M2QzIiwib3JnYW5pemF0aW9ucyI6WyJlMjdlNWMxZC0zMjg0LTRjZmEtOWEyNy1mMjQwMmU5Nzg4ZGMiLCJlZjA5OWZjMC02NTNkLTRjZmUtOWQ0Mi1hZTRmYzBhNTY0NzkiXSwib3JnYW5pemF0aW9uc19zbHVnIjpbInBhcml3YW5hLWhvc3RlbC1saW1hIiwiYmVsbW9uZC1sYXMtY2FzaXRhcyJdLCJyYXRlX2xpbWl0Ijo1MDAsInJhbmRvbSI6MTU3MDYzMDg2NX0.rdXa3PplEXHgLx3qCho3AGaIG97uZm_1j7jsfC2F-Qs'
      }
    })
      .then(res => {
        dispatch(fetch_one(res.data))
      })
      .catch(error => {
        dispatch(fetch_failure(error + 'No result'))
        console.log(error)
      })
  }
}

export { fetch_organizations, fetch_articles, fetch_article }
