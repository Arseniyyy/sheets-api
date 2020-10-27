import { Router, Request, Response } from 'express'
import { retrieveUsers } from '../controllers/retrieveFromSheet'
import { retrieveUsersBatchGet } from '../controllers/batchGet'
import { saveToSheet } from '../controllers/saveToSheet'
import { batchUpdate } from '../controllers/batchUpdate'
import { clearData } from '../controllers/clearData'
import { batchClearData } from '../controllers/batchClear'
import { googleAuth } from '../controllers/googleAuth'
import { oauth2callback } from '../controllers/oauth2callback'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
  return res.json({
    message: 'home'
  })
})

// req: Request, res: Response

router
  .post('/get', retrieveUsers)
  .post('/batch-get', retrieveUsersBatchGet)
  .post('/update', saveToSheet)
  .post('/batch-update', batchUpdate)
  .post('/clear-data', clearData)
  .post('/batch-clear', batchClearData)

  .get('/google', googleAuth)
  .get('/oauth2callback', oauth2callback)

export default router