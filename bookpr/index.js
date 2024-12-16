const express = require('express')
const port = 1009

const app = express()

let Book = [
    // {image:"https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/306/9789356400306.jpg",
    // book:"Are You A Manufacturing Defect ? Fatty Flames",
    // author:"Gege Akutami",
    // price:"699",
    // date:"2019-3-4",
    // },
]

  app.set('view engine', 'ejs')
  app.use(express.urlencoded())
  
  app.get('/', (req, res) => {
      res.render("index", { Book })
  })
  
  app.post("/addData", (req, res) => {
      req.body.id = String(Date.now())
      Book.push(req.body)
      res.redirect("/")
  })
  
  app.get("/deleteData", (req, res) => {
      Book = Book.filter((e) => e.id !== req.query.id)
      res.redirect("/")
  })
  
  app.get("/editData", (req, res) => {
      singleBook = Book.find((e) => e.id == req.query.id)
      res.render("update", { singleBook })
  })
  
  app.post("/updateData", (req, res) => {
      let tempData = Book.map((e) => e.id == req.body.id ? req.body : e)
      Book = tempData
      res.redirect("/")
  })

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port: " + port)
})