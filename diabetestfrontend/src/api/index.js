import axios from "axios"

/**
 * @param {string} method
 * @param {any} url
 * @param {any} request
 */
function httpRequest(method, url, request) {
  return axios[method](url, request)
    .then((/** @type {any} */ response) => Promise.resolve(response))
    .catch((/** @type {any} */ error) => Promise.reject(error))
}

const axiosRequest = {
  /**
   * @param {string} url
   * @param {any} request
   */
  get(url, request) {
    return httpRequest("get", url, request)
  },

  /**
   * @param {string} url
   * @param {any} request
   */
  delete(url, request) {
    return httpRequest("delete", url, request)
  },

  /**
   * @param {string} url
   * @param {any} request
   */
  post(url, request) {
    return httpRequest("post", url, request)
  },

  /**
   * @param {string} url
   * @param {any} request
   */
  put(url, request) {
    return httpRequest("put", url, request)
  },

  /**
   * @param {string} url
   * @param {any} request
   */
  patch(url, request) {
    return httpRequest("patch", url, request)
  },
}

export { axiosRequest }
