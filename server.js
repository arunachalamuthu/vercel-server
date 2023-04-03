import express from 'express'
import cors from 'cors'

const app=express()
app.use(cors())

app.get('/',(req,res)=>{
    res.send('vercel test')
})

app.listen(3010,()=>{
    console.log('server run 3010');
})
