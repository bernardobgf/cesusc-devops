import express from "express"

const app = express()
const PORT = 3333

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", {root: "src"})
})

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})