import { Diesel } from "diesel-core";


const port = process.env.PORT ?? 3000
const app  = new Diesel()


app.get("/",(ctx) => ctx.send("Hello from ec2 instance"))
app.get("/about", (ctx) => ctx.send("this is about page"))

app.listen(port,() => console.log(`Server is running on port ${port}`))