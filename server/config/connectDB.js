const mongoose = require('mongoose')
require("dotenv").config();

const MONGODB_URI =process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {})
  .then(() => {
    console.log(`database connected successfully`);
  })
  .catch((err) => {
    console.log(`an error happened during connecting to database ${err}`);
  });

  module.exports = mongoose;

// async function connectDB(){
//     try {
//         await mongoose.connect(process.env.MONGODB_URI)
//         const connection = mongoose.connection
//         connection.on('connected',()=>{
//             console.log('mongodb connected');
//         })
//         connection.on('error',(error)=>{
//             console.log('something is wrong in mongodb',error);
//         })
//     } catch (error) {
//         console.log('connnect error in  mongoose ',error);
//     } 
// }
// module.exports = connectDB