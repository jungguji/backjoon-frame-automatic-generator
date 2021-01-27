import { AXIOS } from '../common.js'

function requestTemplate (template) {
  return AXIOS.post(`${process.env.VUE_APP_BASEURL}/frame`, template)
}

export { requestTemplate }
