import { Router, Request, Response } from 'express'
import { retrieveData } from '../controllers/retrieveFromSheet'
import { retrieveUsersBatchGet } from '../controllers/batchGet'
import { clearData } from '../controllers/clearData'
import { batchClearData } from '../controllers/batchClear'
import { googleAuth } from '../controllers/googleAuth'
import { oauth2callback } from '../controllers/oauth2callback'
import { fromSheetsToExcel } from '../controllers/fromSheetsToExcel'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
  return res.json({
    message: 'home'
  })
})

// req: Request, res: Response

router
  .get('/get', retrieveData)
  .get('/batch-get', retrieveUsersBatchGet)
  .get('/clear-data', clearData)
  .get('/batch-clear', batchClearData)

  .get('/g', googleAuth)
  .get('/oauth2callback', oauth2callback)
  .get('/from-sheets-to-excel', fromSheetsToExcel)

export default router