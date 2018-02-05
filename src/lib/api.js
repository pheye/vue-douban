import axios from 'axios'

export const getEventList = ({loc = '108288', start, count = 3}) => axios.get('/api/event/list', {params: {loc, start, count}})
export const getEvent = (id) => axios.get(`/api/event/${id}`)
