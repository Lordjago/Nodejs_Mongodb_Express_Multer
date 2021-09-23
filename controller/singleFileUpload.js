const singleFileUpload = async(req, res, next) => {
    try {
        const file = await req.body.file;
        console.log(file);
        res.status(201).json("Success")
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = singleFileUpload