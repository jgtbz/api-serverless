import * as basicEndpoints from './basic/endpoints'

const endpoints = {
  basic: basicEndpoints
}

const getEndpoint = ({ module, endpoint }) => endpoints[module]?.[endpoint]

export default {
  getEndpoint
}
