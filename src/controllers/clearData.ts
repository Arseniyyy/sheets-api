import { Request, Response } from 'express'
import { oauthClient } from '../google/oauth2Client'
import { sheets } from './sheets/sheetsDeclaration'

export async function clearData(req: Request, res: Response) {
  try {
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
    console.error(error.message)
    return res.json({
      error: error.message
    })
  }
}