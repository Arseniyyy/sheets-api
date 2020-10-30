import { google, sheets_v4 } from 'googleapis'
import sheetsDeclaration from '../controllers/sheets/sheetsDeclaration'
import { OAuth2Client, OAuth2ClientOptions } from 'google-auth-library'
import creds from './client_secret.json'
import { scopes } from './scopes'

const opts: OAuth2ClientOptions = {
  clientId: creds.web.client_id,
  clientSecret: creds.web.client_secret,
  redirectUri: creds.web.redirect_uris[0]
}

const oauthClient: OAuth2Client = new google.auth.OAuth2(opts)

function getAccessToSheets(auth: OAuth2Client): sheets_v4.Sheets {
  const sheets: sheets_v4.Sheets = sheetsDeclaration(auth)
  return sheets
}

function getAuthUrl(): string {
  const url: string = oauthClient.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    response_type: 'code',
    login_hint: 'arskosh05@mail.ru'
  })

  return url
}

export { getAuthUrl, getAccessToSheets, oauthClient }