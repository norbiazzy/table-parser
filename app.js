const express = require('express');

const app = express();
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