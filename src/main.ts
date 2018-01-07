const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.get("/", function(req: any, res: any) {
  res.send("Hello World!")
})

app.use(express.static("public"))

app.listen(3002, function() {
  console.log("Example app listening on port 3002!")
})
