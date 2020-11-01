import http from 'http'
import app from './app'
import { google } from 'googleapis'
import { oauthClient } from './google/oauth2Client'

const server: http.Server = http.createServer(app)

server.on('listening', () => {
  google.options({
    auth: oauthClient
  })
})

const port: number = Number(process.env.PORT) || 3000

server.listen(port)

// [projectID].df.r.appspot.com
// sheet-project-294316.df.r.appspot.com