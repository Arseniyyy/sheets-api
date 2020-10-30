import ExcelJS, { Workbook, Worksheet } from 'exceljs'
import { Request, Response } from 'express'
import { sheets_v4 } from 'googleapis'
import sheetsDeclaration from '../controllers/sheets/sheetsDeclaration'
import { oauthClient } from '../google/sheets'

export async function readExcelFile(req: Request, res: Response) {
  try {
    const workBook: Workbook = new ExcelJS.Workbook()

    const file: Workbook = await workBook.xlsx.readFile('E:/Programming/google_apis/sheets/src/excel/files/Financial_Sample.xlsx')
  
    /**
     * Excel worksheet
     */
    const worksheet: Worksheet = file.getWorksheet('Sheet1')

    const numberOfColumns: number = worksheet.columnCount
  
    const sheetValues: ExcelJS.RowValues[] = worksheet.getSheetValues()

    sheetValues.shift()

    let arr: any[] = []

    const mapped: any[][] = sheetValues.map((r: ExcelJS.RowValues) => {
      for (let array = 1; array <= numberOfColumns; array++) {
        arr.push(r[array])
      }

      return arr
    })

    // Sheets definition
    const sheets: sheets_v4.Sheets = sheetsDeclaration(oauthClient)

    const id = req.query.id
    const range = req.query.range

    const { data } = await sheets.spreadsheets.values.update({
      spreadsheetId: id as string,
      range: range as string,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: mapped
      },
      auth: oauthClient
    })

    return res.status(200).json({
      message: data
    })
  } catch (error) {
    return console.error(error.message)
  }
}