var express=require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to the Library')
})

app.get('/english',(req,res)=>{
  res.send('this section is for English Books ')
})

app.get('/novel',(req,res)=>{
    var novel={
        'name':'abc',
        'author':'author',
        'language':'english'
    }
    res.send(novel)
})

app.listen(3000)  //3000 is port number
