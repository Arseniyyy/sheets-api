import { sheets_v4 } from 'googleapis'
import { Request, Response } from 'express'
import { oauthClient } from '../google/oauth2Client'
import { sheets } from './sheets/sheetsDeclaration'

export async function retrieveData(req: Request, res: Response) {
  try {
    const id: string = String(req.query.id)
    const range: string = String(req.query.range)
  
    const opts: sheets_v4.Params$Resource$Spreadsheets$Values$Get = {
      spreadsheetId: id,
      range: range,
      auth: oauthClient
    }
  
    const response = await sheets.spreadsheets.values.get(opts)
  
    const rows: any[] = response.data.values
    
    return res.json({
      message: rows
    })
  } catch (error) {
    console.error(error.message)
    return res.json({
      error: error.message
    })
  }
}