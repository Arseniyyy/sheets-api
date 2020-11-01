import { google, sheets_v4 } from 'googleapis'
import { oauthClient } from '../../google/oauth2Client'

export const sheets: sheets_v4.Sheets = google.sheets({ version: 'v4', auth: oauthClient })