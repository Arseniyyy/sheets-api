import { sheets_v4 } from 'googleapis'
import { getAccessToSheets } from '../google/sheets'
import { Request, Response } from 'express'
import { oauthClient } from '../google/sheets'

async function clearData(req: Request, res: Response) {
  try {
    const sheets: sheets_v4.Sheets = getAccessToSheets(oauthClient)

    const id: string = req.body.id
    const range: string = req.body.range

    const { data } = await sheets.spreadsheets.values.clear({
      spreadsheetId: id,
      auth: oauthClient,
      range
    })

    return res.json({
      message: data
    })
  } catch (error) {
    return console.error(error)
  }
}

export { clearData }