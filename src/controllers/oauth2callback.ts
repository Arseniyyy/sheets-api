import { Request, Response } from 'express'
import { oauthClient } from '../google/sheets'
import { Credentials } from 'google-auth-library'
import fs from 'fs'
import { authorize } from '../google/utils/authorize'

async function oauth2callback(req: Request, res: Response) {
  try {
    const code: any = req.query.code

    const allTokens = await oauthClient.getToken(code)
  
    oauthClient.setCredentials(allTokens.tokens)
  
    oauthClient.on('tokens', (tokens: Credentials) => {
      oauthClient.setCredentials(tokens)
    })

    fs.writeFile('token.json', JSON.stringify(allTokens), err => {
      if (err) {
        console.error(err)
      } else {
        console.log('token_stored')
      }
    })
  
    return res.json({
      message: 'authenticated successfuly'
    })
  } catch (error) {
    return console.error(error.message)
  }
}

export { oauth2callback }