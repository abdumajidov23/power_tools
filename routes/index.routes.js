const { Router } = require("express");
const router = Router();

const clientRouter = require('./client.routes')
const toolRouter = require('./tool.routes')
const owner = require("./owner.routes")

router.use('/client', clientRouter)
router.use('/tool', toolRouter)
router.use('/owner', owner)


module.exports = router