const multer = require("multer")
//file upload like videos,...
const fileFilter = function (req, file, cb) {
  

 if (file.mimetype == 'video/mp4' || file.mimetype == 'video/webm' || file.mimetype == 'video/ogg' || file.mimetype == 'video/x-matroska') {
        cb(null, true)
        console.log(file)
    }
    else {
        cb(null, false)
    }
}

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



const uploadvideo = multer({
    storage: storage,
    limits: {
        fileSize: 10000000 // 10000000 Bytes = 10 MB
        },
    fileFilter: fileFilter
}).fields([
    { name: "video" }
]);

module.exports = uploadvideo;
