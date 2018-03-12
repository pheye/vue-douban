import axios from 'axios'

// 获取活动列表
export const getEventList = ({loc = '108288', start, count = 3}) => axios.get('/api/event/list', {params: {loc, start, count}})
export const getEvent = (id) => axios.get(`/api/event/${id}`)
// 获取电影列表
export const getMovie = (tag) => {
  switch (tag) {
    case 'hot':
      return axios.get('/api/movie/in_theaters?count=8')
    case 'new':
      return axios.get('/api/movie/coming_soon?count=8')
    case 'top':
      return axios.get('/api/movie/top250?count=8')
  }
}
