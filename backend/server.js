const app=require('./app');
const connectDatabase=require('./config/database.js');
const dotenv=require('dotenv');
//setting up config file
dotenv.config(
    {path:'backend/config/config.env'}
)
//connecting to db
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})