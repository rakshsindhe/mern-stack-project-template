const express = require("express");
const router = express.Router();

router.get("/dummy", (req, res) => {
    const phones = [{
        title : 'Samsung Galaxy M10',
        price : "9100",
        ram : "2 GB",
        internalMemory : "16 GB"
    },{
        title : 'Samsung Galaxy M30',
        price : "2400",
        ram : "6 GB",
        internalMemory : "64 GB"
    },{
        title : 'iPhone Pro Max',
        price : "110000",
        ram : "8 GB",
        internalMemory : "64 GB"
    }]

    res.json({
        status: "ok",
        data: phones
    })
})

module.exports = router