import { requestTemplate } from '../api/template/request.js'

const state = {
  text: ''
}

const mutations = {
  SET_TEMPLATE (state, template) {
    state.text = template
  }
}

const actions = {
  async REQUEST_TEMPATE (context, template) {
    try {
      const response = await requestTemplate(template)
      context.commit('SET_TEMPLATE', response.data)
      return response.data
    } catch (e) {
      alert(e, e.response)
    }
  }
}

export default { state, mutations, actions }
