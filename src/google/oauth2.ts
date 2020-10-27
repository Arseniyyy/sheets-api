import { google } from 'googleapis'
import creds from './client_secret.json'
import { OAuth2Client } from 'google-auth-library'
import { Request, Response } from 'express'

const scopes: string[] = [
  'https://www.googleapis.com/auth/spreadsheets'
]

const oauth2Client: OAuth2Client = new google.auth.OAuth2({
  clientId: creds.web.client_id,
  clientSecret: creds.web.client_secret,
  redirectUri: creds.web.redirect_uris[0]
})

function authorize(): string {
  const url: string = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
  })

  return url
}

function google_auth(req: Request, res: Response) {
  return res.redirect(authorize())
}

export { google_auth, oauth2Client }