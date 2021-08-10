const multer = require("multer")
//file upload like videos,...
const fileFilter = function (req, file, cb) {
    if (file.mimetype == "application/vnd.openxmlformats-officedocument.presentationml.presentation") {
        cb(null, true)
    }
    else {
        // console.log(file.mimetype)
        cb(null, false)
    }
}

const storage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
            cb(null, './presentation');
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + file.originalname)
        }
    }
)



const uploadvideo = multer({
    storage: storage,
    limits: {
        fileSize: 40000000 // 10000000 Bytes = 10 MB
    },
    fileFilter: fileFilter
}).fields([
    { name: "video" }
]);

module.exports = uploadvideo;
