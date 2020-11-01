import { sheets_v4 } from 'googleapis'
import { Request, Response } from 'express'
import { oauthClient } from '../google/oauth2Client'
import { sheets } from './sheets/sheetsDeclaration'

export async function retrieveUsersBatchGet(req: Request, res: Response) {
  try {
    const id = req.query.id
    const ranges = req.query.ranges

    const arrOfRanges: string[] = (ranges as string).split(', ')

    const opts: sheets_v4.Params$Resource$Spreadsheets$Values$Batchget = {
      spreadsheetId: id as string,
      ranges: arrOfRanges,
      valueRenderOption: 'FORMATTED_VALUE',
      auth: oauthClient
    }

    const response = await sheets.spreadsheets.values.batchGet(opts)

    return res.json({
      message: response.data.valueRanges
    })
  } catch (error) {
    console.error(error.message)
    return res.json({
      error: error.message
    })
  }
}