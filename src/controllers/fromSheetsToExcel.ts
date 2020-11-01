import xlsx from 'xlsx'
import { oauthClient } from '../google/oauth2Client'
import { Request, Response } from 'express'
import { sheets } from './sheets/sheetsDeclaration'

// path = E:/Programming/google_apis/sheets/src/excel/files/By_xlsx.xlsx

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

    xlsx.writeFile(newWb, String(req.query.path))

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