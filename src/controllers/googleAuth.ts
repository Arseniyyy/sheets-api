import { Request, Response } from 'express'
import { getAuthUrl } from '../google/sheets'

export function googleAuth(req: Request, res: Response) {
  return res.redirect(getAuthUrl())
}