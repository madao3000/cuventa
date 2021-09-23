import express from 'express'
import morgan from 'morgan'
import { createRoles } from './libs/inicialSetup'

import shopRoute from './routes/shop.route'
import authRoute from './routes/auth.route'

const app = express();
createRoles();

app
    .use(express.json())
    .use(morgan('dev'))
    .use('/shop', shopRoute)
    .use('/auth', authRoute)


export default app