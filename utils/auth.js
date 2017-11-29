import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'

export const setToken = (token) => {
  if (process.SERVER_BUILD) return
  window.localStorage.setItem('jwt_token', token)
  Cookie.set('jwt', token)
}

export const unsetToken = () => {
  if (process.SERVER_BUILD) return
  window.localStorage.removeItem('jwt_token')
  Cookie.remove('jwt')
}

export const getUserFromCookie = (req) => {
  if (!req.headers.cookie) return
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
  if (!jwtCookie) return
  const jwt = jwtCookie.split('=')[1]
  return jwtDecode(jwt)
}

export const getUserFromLocalStorage = () => {
  const json = window.localStorage.user
  return json ? JSON.parse(json) : undefined
}

export const setUser = (user) => {
  window.localStorage.setItem('user', JSON.stringify(user))
}