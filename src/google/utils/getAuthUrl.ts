import { oauthClient } from '../oauth2Client'
import { scopes } from '../scopes'

export function getAuthUrl(): string {
  const url: string = oauthClient.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
  })

  return url
}