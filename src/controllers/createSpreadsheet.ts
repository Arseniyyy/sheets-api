import { Request, Response } from 'express'
import { oauthClient } from '../google/oauth2Client'
import { sheets } from './sheets/sheetsDeclaration'

export async function createSpreadsheet(req: Request, res: Response) {
  try {
    const { data } = await sheets.spreadsheets.create({
      auth: oauthClient
    })

    return res.json({
      message: data
    })
  } catch (error) {
    return console.error(error.message)
  }
}