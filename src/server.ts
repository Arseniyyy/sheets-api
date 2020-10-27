import http, { Server } from 'http'
import app from './app'
import { google } from 'googleapis'
import { oauthClient } from './google/sheets'

const server: Server = http.createServer(app)

server.on('listening', () => {
  google.options({
    auth: oauthClient
  })
})

server.listen(3000)