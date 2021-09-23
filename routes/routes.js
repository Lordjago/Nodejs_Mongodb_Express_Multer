const express = require('express')

const router = express.Router()

const { upload } = require('../helper/helper')

const {singleFileUpload, multipleFileUpload} = require('../controller/singleFileUpload')

router.post('/upload', upload.single('file'), singleFileUpload);
router.post('/uploads', upload.array('files'), multipleFileUpload);

module.exports = router