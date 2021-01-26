import { AXIOS } from '../common.js'

function requestTemplate (template) {
  alert(`${process.env.VUE_APP_BASEURL}`)
  return AXIOS.post(`${process.env.VUE_APP_BASEURL}/frame`, template)
}

export { requestTemplate }
