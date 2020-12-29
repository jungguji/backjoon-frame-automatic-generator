import { AXIOS } from '../common.js'

function requestTemplate (template) {
  alert(template.isTestCase)
  return AXIOS.post(`${process.env.VUE_APP_BASEURL}/frame`, 'test')
}

export { requestTemplate }
