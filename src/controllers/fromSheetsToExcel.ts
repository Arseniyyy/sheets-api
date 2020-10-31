import { oauthClient } from '../google/sheets'
import { getAccessToSheets } from '../google/sheets'
import { Request, Response } from 'express'
import { sheets_v4 } from 'googleapis'
import xlsx from 'xlsx'

export async function fromSheetsToExcel(req: Request, res: Response) {
  try {
    const sheets: sheets_v4.Sheets = getAccessToSheets(oauthClient)

    // const id = req.query.id
    // const range = req.query.range

    // const { data } = await sheets.spreadsheets.values.get({
    //   spreadsheetId: id as string,
    //   range: range as string,
    //   auth: oauthClient
    // })

    const workbook: xlsx.WorkBook = xlsx.readFile('E:/Programming/google_apis/sheets/src/excel/files/Financial_Sample.xlsx', {})
    const worksheet: xlsx.WorkSheet = workbook.Sheets['Sheet1']

    console.log(worksheet)

    return res.json({
      message: 'file read'
    })
  } catch (error) {
    return console.error(error)
  }
}