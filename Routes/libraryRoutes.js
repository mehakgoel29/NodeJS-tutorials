const express=require('express');
const router=express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Library')
  })
  
router.get('//english',(req,res)=>{
    res.send('this section is for English Books ')
  })
  
router.get('/novel',(req,res)=>{
      var novel={
          'name':'abc',
          'author':'author',
          'language':'english'
      }
      res.send(novel)
  })
  
module.exports=router  