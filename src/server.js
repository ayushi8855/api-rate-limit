// const  connect  = require("./configs/db")
const connect = require("./configs/db")
// const app =require("./index")
const app= require("./index")
const port =process.env.PORT || 4000

app.listen(port,async()=>{
    try {
     await connect()
    } catch (error) {
        console.log(error)
    }
    console.log(`listing to ${port}`)
})