import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes

app.get('/', (req: Request, res: Response) => {
  const a = 30
  res.send(a)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
