import {commonParams, options} from './config'
import axios from 'axios'

export function getLyric(id) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    musicid: id,
    songtype: 0,
    jsonpCallback: 'jsonp1'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
