const multer = require("multer") //file upload like videos,...
const storage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
            cb(null, './videos');
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + file.originalname)
        }
    }
)

const fileFilter = function (req, file, cb) {
    if (file.mimetype == 'video/mp4'|| file.mimetype == 'video/webm'||file.mimetype == 'video/ogg') {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
}

const uploadvideo = multer({
    storage: storage,
    fileFilter : fileFilter
});


module.exports = uploadvideo;
