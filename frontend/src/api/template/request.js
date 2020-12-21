import { AXIOS } from '../common.js'

function requestTemplate (template) {
  alert(template.isTestCase)
  return AXIOS.get(`${process.env.VUE_APP_BASEURL}/frame`, {
    params: {
      isTestCase: template.isTestCase,
      isNQuantity: template.isNQuantity,
      isSpaceIncludeNumber: template.isSpaceIncludeNumber
    }
  })
}

export { requestTemplate }
