import { Request, Response } from 'express'
import { getAuthUrl } from '../google/utils/getAuthUrl'

export function redirectToAuthURL(req: Request, res: Response) {
  return res.redirect(getAuthUrl())
}