import axios from '../utils/axios'
export const fetchData = query => {
  return axios({
    url: './table.json',
    method: 'get',
    params: query
  })
}