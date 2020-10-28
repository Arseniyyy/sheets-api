import { oauthClient } from '../sheets'
import fs from 'fs'

export function authorize(): void {
  fs.readFile('token.json', (err, token) => {
    if (err) {
      console.error(err)
    }

    oauthClient.setCredentials(JSON.parse(String(token)))
  })
}