const ip = require('ip')

const isNetwork = true

module.exports = {
  ip: isNetwork ? ip.address() : '127.0.0.1',
  port: 3004
}
