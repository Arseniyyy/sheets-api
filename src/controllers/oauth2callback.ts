import { Request, Response } from 'express'
import { oauthClient } from '../google/sheets'
import { Credentials } from 'google-auth-library'
import { makeRequestToAnAPI } from '../google/drive'
import { getAccessToSheets } from '../google/sheets'
import { sheets_v4 } from 'googleapis'

async function oauth2callback(req: Request, res: Response) {
  try {
    const code: any = req.query.code

    const allTokens = await oauthClient.getToken(code)
  
    oauthClient.setCredentials(allTokens.tokens)

    oauthClient.on('tokens', (tokens: Credentials) => {
      oauthClient.setCredentials(tokens)
    })

    // const sheets: sheets_v4.Sheets = getAccessToSheets(oauthClient)

    // const { data } = await sheets.spreadsheets.values.get({
    //   spreadsheetId: '1Of2NHI18CtlWnRrOP2BZyRZczB8LpTk6u4VH9ssLq2k',
    //   range: 'sheet',
    //   auth: oauthClient
    // })

    return res.json({
      message: 'authenticated successfuly. Now you can make requests to the api'
    })
  } catch (error) {
    return console.error(error.message)
  }
}

export { oauth2callback }