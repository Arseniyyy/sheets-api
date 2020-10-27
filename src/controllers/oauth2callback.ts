import { Request, Response } from 'express'
import { oauthClient } from '../google/sheets'
import { Credentials } from 'google-auth-library'

async function oauth2callback(req: Request, res: Response) {
  try {
    const code: any = req.query.code

    const allTokens = await oauthClient.getToken(code)
  
    oauthClient.setCredentials(allTokens.tokens)
  
    oauthClient.on('tokens', (tokens: Credentials) => {
      oauthClient.setCredentials(tokens)
    })
  
    return res.json({
      message: 'successfuly authenticated'
    })
  } catch (error) {
    return console.error(error)
  }
}

export { oauth2callback }