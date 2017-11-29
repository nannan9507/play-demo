const express = require('express')
const { Nuxt, Builder } = require('nuxt')

const path = require('path')

const app = express()

const localhost = require('./localhost')
const host = process.env.HOST || localhost.ip
const port = process.env.PORT || localhost.port

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

let serverPublicRoot = `${process.cwd()}/dist`
app.use(express.static(serverPublicRoot))

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
