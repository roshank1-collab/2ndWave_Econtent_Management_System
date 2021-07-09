const multer = require('multer'); //file upload

const fileFilter = function(req,file,cb){
//filturing the file
    if(file.mimetype=='image/jpeg'||file.mimetype=='image/png'||file.mimetype=='image/jpg'){
        cb(null,true);
    }
    else(
        cb(null,false)
    )
}
//  destination of the file to store
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './pictures');

    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});
//upload the file 
const upload = multer({
    storage:storage,
    fileFilter:fileFilter
}).fields([
    {name:"Profile_Picture"},
    {name:"institution_ID"}
])

module.exports = upload;
