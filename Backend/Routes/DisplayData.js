const express = require('express')
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try {
        console.log(global.food_items)
        res.send([global.food_items,global.food_categorey])
    } catch (error) {
        console.error('server error')
    }
})


module.exports =router;