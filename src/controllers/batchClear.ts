import { sheets_v4 } from 'googleapis'
import { Request, Response } from 'express'
import { oauthClient } from '../google/sheets'
import { getAccessToSheets } from '../google/sheets'

async function batchClearData(req: Request, res: Response) {
  try {
    const sheets: sheets_v4.Sheets = getAccessToSheets(oauthClient)

    const id: string = req.body.id

    const stringOfRanges: string = req.body.ranges
    const arrOfRanges: string[] = stringOfRanges.split(', ')

    const { data } = await sheets.spreadsheets.values.batchClear({
      spreadsheetId: id,
      requestBody: {
        ranges: arrOfRanges,
      },
      auth: oauthClient
    })

    return res.json({
      message: data
    })
  } catch (error) {
    return console.error(error)
  }
}

export { batchClearData }