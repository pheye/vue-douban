export const QUERY_EVENT = 'QUERY_EVENT'
export const GET_EVENT = 'GET_EVENT'

export const createAsyncAction = (type, fn) => async ({commit, state}, payload) => {
  commit({
    type: `${type}_PENDING`,
    params: payload
  })
  try {
    let res = await fn({commit, state}, payload)
    commit({
      type: `${type}_FULFILLED`,
      data: res.data,
      params: payload
    })
    return res.data
  } catch (e) {
    commit({
      type: `${type}_FAILED`,
      params: payload
    })
    throw e
  }
}
