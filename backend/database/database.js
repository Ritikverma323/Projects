const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config/config.env'});


const connectionString=process.env.MONGO_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
   
  };



  mongoose.connect(connectionString, options).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */  console.log("connected to database")},
    error => { /** handle initial connection error */ console.log(error) }
  );