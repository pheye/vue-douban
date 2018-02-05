import * as api from '@/lib/api'
import {QUERY_EVENT, GET_EVENT, createAsyncAction} from '@/store/actions'

const state = {
  loading: false,
  data: [],
  pagination: {
    start: 0,
    count: 0,
    total: 0
  },
  currentItem: null
}

const actions = {
  [QUERY_EVENT]: createAsyncAction(QUERY_EVENT, async ({commit, state}, { start = 0, count = 10, clear = false }) => {
    if (!start && !clear) {
      start = state.pagination.start + state.pagination.count
    }
    let res = await api.getEventList({start, count})
    return res
  }),
  [GET_EVENT]: createAsyncAction(GET_EVENT, async ({commit, state}, {id}) => {
    let res = await api.getEvent(id)
    return res
  })
}

const mutations = {
  [`${QUERY_EVENT}_PENDING`] (state, payload) {
    state.loading = true
  },
  [`${QUERY_EVENT}_FULFILLED`] (state, payload) {
    let {start, count, total} = payload.data
    state.loading = false
    if (payload.params.clear) { state.data = payload.data.events } else { state.data = [...state.data, ...payload.data.events] }
    state.pagination = {
      start,
      count,
      total
    }
  },
  [`${QUERY_EVENT}_REJECTED`] (state, payload) {
    state.loading = false
  },
  [`${GET_EVENT}_PENDING`] (state, payload) {
    state.loading = true
  },
  [`${GET_EVENT}_FULFILLED`] (state, payload) {
    state.currentItem = payload.data
  },
  [`${GET_EVENT}_REJECTED`] (state, payload) {
    state.loading = false
  }
}

export default {
  state,
  mutations,
  actions
}
