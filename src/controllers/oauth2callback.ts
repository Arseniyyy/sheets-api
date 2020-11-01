import { Request, Response } from 'express'
import { oauthClient } from '../google/oauth2Client'
import { Credentials } from 'google-auth-library'

export async function oauth2callback(req: Request, res: Response) {
  try {
    const code: any = req.query.code

    const allTokens = await oauthClient.getToken(code)
  
    oauthClient.setCredentials(allTokens.tokens)

    oauthClient.on('tokens', (tokens: Credentials) => {
      oauthClient.setCredentials(tokens)
    })

    return res.json({
      message: 'authenticated successfuly. Now you can make requests to the api'
    })
  } catch (error) {
    return console.error(error.message)
  }
}