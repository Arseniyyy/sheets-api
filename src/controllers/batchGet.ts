import { sheets_v4 } from 'googleapis'
import { Request, Response } from 'express'
import { oauthClient } from '../google/sheets'
import { getAccessToSheets } from '../google/sheets'

async function retrieveUsersBatchGet(req: Request, res: Response) {
  try {
    const sheets: sheets_v4.Sheets = getAccessToSheets(oauthClient)

    const id: string = req.body.id

    const ranges: string = req.body.ranges
    const arrOfRanges: string[] = ranges.split(', ')

    const opts: sheets_v4.Params$Resource$Spreadsheets$Values$Batchget = {
      spreadsheetId: id,
      ranges: arrOfRanges,
      valueRenderOption: 'FORMATTED_VALUE',
      auth: oauthClient
    }

    const response = await sheets.spreadsheets.values.batchGet(opts)


    return res.json({
      message: response.data
    })
  } catch (error) {
    return console.error(error)
  }
}

export {
  retrieveUsersBatchGet
}