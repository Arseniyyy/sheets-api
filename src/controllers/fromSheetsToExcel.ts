import xlsx from 'xlsx'
import { oauthClient } from '../google/oauth2Client'
import { Request, Response } from 'express'
import { sheets } from './sheets/sheetsDeclaration'
import path from 'path'

export async function fromSheetsToExcel(req: Request, res: Response) {
  try {
    const id = req.query.id
    const range = req.query.range

    const { data } = await sheets.spreadsheets.values.get({
      spreadsheetId: id as string,
      range: range as string,
      auth: oauthClient
    })

    // xlsx
    const newWb: xlsx.WorkBook = xlsx.utils.book_new()

    const newWorksheet: xlsx.WorkSheet = xlsx.utils.aoa_to_sheet(data.values)

    xlsx.utils.book_append_sheet(newWb, newWorksheet, String(req.query.sheet_name))

    xlsx.writeFile(newWb, path.join(__dirname, 'excel/files/created_automatically.xlsx'))

    return res.json({
      message: 'File created'
    })
  } catch (error) {
    console.error(error.message)
    return res.json({
      error: error.message
    })
  }
}