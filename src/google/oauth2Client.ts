import { google } from 'googleapis'
import { OAuth2Client, OAuth2ClientOptions } from 'google-auth-library'
import config from '../config'

const opts: OAuth2ClientOptions = {
  clientId: config.prod.client_secret.web.client_id,
  clientSecret: config.prod.client_secret.web.client_secret,
  redirectUri: config.prod.client_secret.web.redirect_uris[0]
}

export const oauthClient: OAuth2Client = new google.auth.OAuth2(opts)