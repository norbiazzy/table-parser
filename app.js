const express = require('express');
const fileUpload = require('express-fileupload')
const cors = require('cors');

const app = express();
app.use(cors())
app.use(fileUpload({}))
app.use(express.json({extended: true}))
app.use('/api/parser', require('./parser'))

const PORT = process.env.PORT ||  5000

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`app has been started on port ${PORT}...`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()