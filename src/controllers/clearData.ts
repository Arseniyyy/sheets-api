import { sheets_v4 } from 'googleapis'
import { getAccessToSheets } from '../google/sheets'
import { Request, Response } from 'express'
import { oauthClient } from '../google/sheets'

export async function clearData(req: Request, res: Response) {
  try {
    const sheets: sheets_v4.Sheets = getAccessToSheets(oauthClient)

    const id = req.query.id
    const range = req.query.range

    const { data } = await sheets.spreadsheets.values.clear({
      spreadsheetId: id as string,
      range: range as string,
      auth: oauthClient
    })

    return res.json({
      message: data
    })
  } catch (error) {
    return console.error(error)
  }
}