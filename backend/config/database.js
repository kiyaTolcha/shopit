const  mongoose=require('mongoose');

const connectDatabase=()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(con=>{
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    })
}
// mongoose.connect('mongodb://localhost/test',{useNewUrlParser:true})
// mongoose.connection.once('open',function(){
//     console.log('connection has been made');
// }).on('error',function(error){console.log('error is:',error)})
module.exports=connectDatabase
