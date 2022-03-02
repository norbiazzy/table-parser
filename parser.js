const {Router} = require('express')
const router = Router()
let XLSX = require("xlsx");

// /api/parser/
router.post('/', async (req, res) => {
    try {
        let {file} = req.files
        const workbook = XLSX.read(file.data);
        return res.json({data: workbook.Sheets})
    } catch (e) {
        console.log(e, 'error')
        return res.status(400).json({message: 'bad request'})
    }
})

router.get('/', async (req, res) => {
    try {
        return res.json({asd:321})
    } catch (e) {
        console.log(e, 'error')
        return res.status(500).json({message: 'dont work'})
    }
})

module.exports = router