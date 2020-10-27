import { Request, Response } from 'express'
import { getAuthUrl } from '../google/sheets'

function googleAuth(req: Request, res: Response): void {
  return res.redirect(getAuthUrl())
}

export { googleAuth }