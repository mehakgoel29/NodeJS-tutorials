const express=require('express');
const router=express.Router();
const student=require('../Models/students')

router.post('/', async(req, res) => {
    try{
    //get the data from the req.body
    const data = req.body;
    /*const newStudent=new student();
     newStudent.name=data.name;
     newStudent.gender=data.gender;   and so on but this would be very time consuming so simply pass 'data' as parameter in student() 
     */
  
    // create a new Student document using mongoose model 
    const newStudent = new student(data);
  
    // save the document in the database
    const savedStudent= await newStudent.save();
    console.log('data saved')
    res.status(200).json({savedStudent})
    }
    catch(err){
      console.log('error: ',err);
      res.status(500).json({error:'Internal Server Error'})
    }
  })
  
  
router.get('/', async(req, res) => {
    try{
      const data=await student.find();
      console.log('data fetched')
      res.status(200).json({data})
    }
    catch(err){
      console.log('error: ',err);
      res.status(500).json({error:'Internal Server Error'})
    }
  })
  
  
  
router.get('//:educationData', async (req, res) => {
    //Anything after /student/ will be captured as a variable called educationLevel
    try {
      //req.params --> Object containing route parameters
      const education = req.params.educationData;
      //Extracts the route parameter educationLevel from the request.
      const response = await student.find({ educationLevel: education });
      if(response.length===0){   //no record with the educationlevel mentioned exists
        res.status(404).json({error:'invalid Education Level'})
      }
      console.log('Data fetched');
      res.status(200).json({ data: response });
    } catch (err) {
      console.log('Error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports=router