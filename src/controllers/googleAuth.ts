import { Request, Response } from 'express'
import { getAuthUrl } from '../google/sheets'

export function googleAuth(req: Request, res: Response): void {
  return res.redirect(getAuthUrl())
}