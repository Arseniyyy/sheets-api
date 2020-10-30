import { oauthClient } from '../google/sheets'
import { getAccessToSheets } from '../google/sheets'
import ExcelJS, { Workbook, Worksheet } from 'exceljs'
import { Request, Response } from 'express'
import { sheets_v4 } from 'googleapis'
// import fs from 'fs'

export async function fromSheetsToExcel(req: Request, res: Response) {
  try {
    const sheets: sheets_v4.Sheets = getAccessToSheets(oauthClient)

    const id = req.query.id
    const range = req.query.range

    // const { data } = await sheets.spreadsheets.values.get({
    //   spreadsheetId: id as string,
    //   range: range as string,
    //   auth: oauthClient
    // })

    const workbook: Workbook = new ExcelJS.Workbook()
  } catch (error) {
    return console.error(error)
  }
}