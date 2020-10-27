import { sheets_v4 } from 'googleapis'
import { Request, Response } from 'express'
import { oauthClient } from '../google/sheets'
import { getAccessToSheets } from '../google/sheets'

async function retrieveUsers(req: Request, res: Response) {
  try {
    const sheets: sheets_v4.Sheets = getAccessToSheets(oauthClient)

    const id: string = req.body.id
    const range: string = req.body.range
  
    const opts: sheets_v4.Params$Resource$Spreadsheets$Values$Get = {
      spreadsheetId: id,
      range,
      auth: oauthClient
    }
  
    const response = await sheets.spreadsheets.values.get(opts)
  
    const rows: any[] = response.data.values
  
    if (rows.length) {
      const rowHead = rows.shift()
  
      const formattedUsers = rows.map((row: any[]) => {
        return rowHead.reduce((obj: object, key: string, i: number) => {
          obj[key] = row[i]
          return obj
        }, {})
      })
  
  
      return res.json({
        message: formattedUsers
      })
    }
  } catch (error) {
    return console.error(error)
  }
}

export {
  retrieveUsers
}