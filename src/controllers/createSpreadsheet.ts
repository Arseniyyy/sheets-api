import { Request, Response } from 'express'
import { oauthClient } from '../google/oauth2Client'
import { sheets } from './sheets/sheetsDeclaration'

export async function createSpreadsheet(req: Request, res: Response) {
  try {
    const { data } = await sheets.spreadsheets.create({
      auth: oauthClient
    })

    return res.redirect(data.spreadsheetUrl)
  } catch (error) {
    console.error(error.message)
    return res.json({
      error: error.message
    })
  }
}