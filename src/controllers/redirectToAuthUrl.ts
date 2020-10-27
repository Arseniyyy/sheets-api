import { Request, Response } from 'express'
import { getAuthUrl } from '../google/sheets'

function redirectToAuthURL(req: Request, res: Response) {
  return res.redirect(getAuthUrl())
}

export { redirectToAuthURL }