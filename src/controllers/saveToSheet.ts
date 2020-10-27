import { sheets_v4 } from 'googleapis'
import { Request, Response } from 'express'
import { oauthClient } from '../google/sheets'
import { getAccessToSheets } from '../google/sheets'

const id: string = '1DNgm-2Y6f9XaJTTbHG4HiWnR-N9WJkPW4cUzK_kDebo'

async function saveToSheet(req: Request, res: Response) {
  try {
    const sheets: sheets_v4.Sheets = getAccessToSheets(oauthClient)

    const range: string = req.body.range
    const values: string[][] = Array(Array(req.body.values))

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: id,
      valueInputOption: 'USER_ENTERED',
      range,
      requestBody: {
        values
      },
      auth: oauthClient
    })

    return res.json({
      message: response.data
    })
  } catch (error) {
    return console.error(error.message)
  }
}

export {
  saveToSheet
}