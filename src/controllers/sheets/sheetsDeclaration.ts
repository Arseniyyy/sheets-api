import { google, sheets_v4 } from 'googleapis'
import { OAuth2Client } from 'google-auth-library'

export default function(auth: OAuth2Client): sheets_v4.Sheets {
  return google.sheets({ version: 'v4', auth })
}