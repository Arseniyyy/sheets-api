import express, { Application, Request, Response, NextFunction } from 'express'
import router from './router/main'

const app: Application = express()

app.use(express.static('public'))
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use('/', router)
  .use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    res.setHeader("Content-Disposition", "attachment; filename=Financial_Sample.xlsx")
    next()
  })

process.on('exit', (code: number) => {
  return console.error(`Exit with code ${code}`)
})

export default app