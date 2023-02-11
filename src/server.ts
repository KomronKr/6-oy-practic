import dotenv from 'dotenv'

dotenv.config();

import express from 'express'
import cors from 'cors'
import groups from './routes/groupes.routes';

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use('/groups', groups)

const port = process.env.port || 3030

app.listen( () => {
    console.log('Server is running of ' + port);
})