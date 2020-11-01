import { Request, Response } from 'express'
import { getAuthUrl } from '../google/utils/getAuthUrl'

export function googleAuth(req: Request, res: Response) {
  return res.redirect(getAuthUrl())
}