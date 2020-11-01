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

router
  .get('https://sheet-project-294316.el.r.appspot.com/get', retrieveData)
  .get('https://sheet-project-294316.el.r.appspot.com/batch-get', retrieveUsersBatchGet)
  .get('https://sheet-project-294316.el.r.appspot.com/clear-data', clearData)
  .get('https://sheet-project-294316.el.r.appspot.com/batch-clear', batchClearData)

  .get('https://sheet-project-294316.el.r.appspot.com/g', googleAuth)
  .get('https://sheet-project-294316.el.r.appspot.com/oauth2callback', oauth2callback)
  .get('https://sheet-project-294316.el.r.appspot.com/from-sheets-to-excel', fromSheetsToExcel)

export default router