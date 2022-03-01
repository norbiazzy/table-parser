const {Router} = require('express')
const router = Router()
let XLSX = require("xlsx");

// /api/parser/
router.post('/', async (req, res) => {
    try {
        let {file} = req.body
        let data = await file.arrayBuffer()

        const workbook = XLSX.read(data);
        console.log(workbook)

    } catch (e) {
        console.log(e, 'error')
    }
})

module.exports = router