const express = require('express')


const port = process.env.PORT ?? 3000
const app  = express()


app.get("/",(_,res) => res.send("Hello from ec2 instance"))
app.get("/about", (_, res) => res.send("this is about page"))

app.listen(port,() => console.log(`Server is running on port ${port}`))