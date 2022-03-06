require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const whitelistSchema = require('./whitelistSchema')
const privatelistSchema = require('./privatelistSchema')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DATABASE_URI)
    .then(()=>{
        console.log('Database Connected')
    })
    .catch(()=> console.log("Database Connected Failed"))

app.listen(process.env.PORT, () => console.log(`server started`))

app.get('/', async (req, res) =>{
    res.send('Server Working')
})

app.post('/whitelist', async (req, res) =>{
    console.log(req.body)
    const address = req.body.address;
    whitelistSchema.findOne({'address':address})
        .then((result)=>{
            console.log(result)
            if (result){
                res.send({
                    signature:result.signature
                })
            }
            else {
                console.log('Not found')
                res.status(404).send()
            }
        })
        .catch(() =>{ 
            console.log("Error")

        })
})

app.post('/privatelist', async (req, res) =>{
    console.log(req.body)
    const address = req.body.address;
    privatelistSchema.findOne({'address':address})
        .then((result)=>{
            console.log(result)
            if (result){
                res.send({
                    signature:result.signature
                })
            }
            else {
                console.log('Not found')
                res.status(404).send()
            }
        })
        .catch(() =>{ 
            console.log("Error")

        })
})

