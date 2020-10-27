import { sheets_v4 } from 'googleapis'
import { getAccessToSheets } from '../google/sheets'
import { Request, Response } from 'express'
import { oauthClient } from '../google/sheets'

async function batchUpdate(req: Request, res: Response) {
  try {
    const arrayOfParsedValues: object[] = []
    const sheets: sheets_v4.Sheets = getAccessToSheets(oauthClient)

    const data: string = req.body.whole_string
    const separatedStrings: string[] = data.split(', ')

    for (let str of separatedStrings) {
      const parsed: object = JSON.parse(str)

      arrayOfParsedValues.push(parsed)
    }

    const id: string = req.body.id

    const opts: sheets_v4.Params$Resource$Spreadsheets$Values$Batchupdate = {
      spreadsheetId: id,
      requestBody: {
        data: arrayOfParsedValues,
        valueInputOption: 'USER_ENTERED'
      },
      auth: oauthClient
    }

    const response = await sheets.spreadsheets.values.batchUpdate(opts)

    return res.json({
      message: response.data
    })
  } catch (error) {
    return console.error(error)
  }
}

export {
  batchUpdate
}