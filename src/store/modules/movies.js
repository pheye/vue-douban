import * as api from '@/lib/api'
import {QUERY_MOVIE, createAsyncAction} from '@/store/actions'

const state = {
  hotMovie: [],
  newMovie: [],
  topMovie: []
}

const actions = {
  [QUERY_MOVIE]: createAsyncAction(QUERY_MOVIE, async ({commit, state}, {type = 'hot'}) => {
    let res = await api.getMovie(type)
    return res
  })
}

const mutations = {
  [`${QUERY_MOVIE}_PENDING`] (state, payload) {
  },
  [`${QUERY_MOVIE}_FULFILLED`] (state, payload) {
    switch (payload.params.type) {
      case 'hot':
        state.hotMovie = payload.data.subjects
        break
      case 'new':
        state.newMovie = payload.data.subjects
        break
      case 'top':
        state.topMovie = payload.data.subjects
        break
    }
  },
  [`${QUERY_MOVIE}_REJECTED`] (state, payload) {
  }
}

export default {
  state,
  mutations,
  actions
}
