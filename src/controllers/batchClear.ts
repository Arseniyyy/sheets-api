import { Request, Response } from 'express'
import { oauthClient } from '../google/oauth2Client'
import { sheets } from './sheets/sheetsDeclaration'

export async function batchClearData(req: Request, res: Response) {
  try {
    const id = req.query.id

    const stringOfRanges = req.query.ranges
    const arrOfRanges: string[] = (stringOfRanges as string).split(', ')

    const { data } = await sheets.spreadsheets.values.batchClear({
      spreadsheetId: id as string,
      requestBody: {
        ranges: arrOfRanges,
      },
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