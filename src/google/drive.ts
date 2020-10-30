import { google } from 'googleapis'
import { oauthClient } from './sheets'

export async function makeRequestToAnAPI() {
  try {
    console.log(oauthClient.credentials)
    const drive = google.drive({
      version: 'v3',
      auth: oauthClient
    })
  
    const { data } = await drive.files.list({
      pageSize: 10,
      fields: 'nextPageToken, files(id, name)',
      auth: oauthClient
    })
  
    console.log(data)
  } catch (error) {
    return console.error(error.message)
  }
}