const {Router} = require('express')
const router = Router()
let XLSX = require("xlsx");

// /api/parser/
router.post('/', async (req, res) => {
    try {
        let {file} = req.files
        const workbook = XLSX.read(file.data);
        return res.json({data: workbook.Sheets})
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
    } catch (e) {
        console.log(e, 'error')
    }
})

router.get('/', async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
        return res.json({asd:321})
    } catch (e) {
        console.log(e, 'error')
    }
})

module.exports = router