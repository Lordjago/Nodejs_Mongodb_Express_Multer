const SingleFile = require('../model/singleFileUpload')

const MultipleFile = require('../model/multipleFileUpload')

const singleFileUpload = async(req, res, next) => {
    try {
        const file = new SingleFile ( {
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) //0.00
        })
        file.save()
        .then(()=> {
             console.log(file);
            res.status(201).json("Success")
        })
       
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const multipleFileUpload = async (req, res, next) => {
    try {
        let fileArray = [];
        req.files.forEach(element => {
            const files = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2) //0.00
            }
            fileArray.push(files)
        });
        const multipleFile = new MultipleFile({
            title: req.body.title,
            files: fileArray
        })
        await multipleFile.save()
       .then(() => {
                res.status(201).json("Success")
            })

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if (bytes) {
        return '0 Bytes'
    }

    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index]
}
module.exports = {
    singleFileUpload,
    multipleFileUpload
}