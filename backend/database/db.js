const mongoose=require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/E_content_database',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(() => console.log("Database Connected Successfully"))
.catch(err => console.log(err));