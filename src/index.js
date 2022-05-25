const rateLimit = require('express-rate-limit')
const express=require("express")
const app = express()
const usercont= require("./controller/usercont")


const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 5 requests per `window` (here, per 10 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

app.use(express.json())
app.use("/user",usercont)

module.exports=app