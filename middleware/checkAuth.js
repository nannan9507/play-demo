import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'

export default ({ isServer, store, req }) => {
  if (isServer && !req) return
  const user = isServer ? getUserFromCookie(req) : getUserFromLocalStorage
  store.commit('SET_USER', user)
}
