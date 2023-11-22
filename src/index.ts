import express from 'express';
import cors from 'cors';
import router from './routes/index.routes';

const app = express()
const PORT = 3000

app.use(express.json()) 

app.use(cors({
    credentials: true,
}));

app.use('/api', router())

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
