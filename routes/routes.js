const express = require('express')

const router = express.Router()

const { upload } = require('../helper/helper')

const fileUpload = require('../controller/singleFileUpload')

router.post('/upload', upload.single('file'), fileUpload);

module.exports = router