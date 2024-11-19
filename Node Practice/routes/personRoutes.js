const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/', async (req, res)=>{
    try{
     const data = req.body
    //create new person doc using the mongoose model
   //  1 option --
     // const newPerson = new Person();
     // newPerson.name = data.name;
     // newPerson.age = data.age;
   //  The above method to store data 
   // 2 option-- All data copied from req.body
   const newPerson = new Person(data);
   // Save the new person to the database
   const response = await newPerson.save();
     console.log('data saved');
     res.status(200).json(response);
    }
    catch(err){
     console.log(err);
     res.status(500).json({error: 'Internal Server Error'});
     }
   }) 
   router.get('/',async(req, res)=>{
    try{
     const data = await Person.find();
     console.log('data fetched');
     res.status(200).json(data);
    }catch(err){
      console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
    }
  })
  router.get('/:workType', async(req, res)=>{
    try{
      const workType = req.params.workType; // // Extract the work type from the URL parameter if (workType == 'chef' || workType == 'manager' || workType = 'waiter' ){
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter' ){
    const response = await Person.find({work: workType});
    console.log('response fetched');
    res.status(200).json(response);
    }else{
    res.status(404).json({error: 'Invalid work type'});
    }
    }catch(err) {
    console.log(err); 
    res.status(500).json({error: 'Internal Server Error'});
    }
  })
  router.put('/:id', async (req, res) => {
    try{
    const personId = req.params.id; // Extract the id from the URL parameter
    const updatedPersonData = req.body; // Updated data for the person  
    const response = await Person.findByIdAndUpdate (personId, updatedPersonData, {
    new: true, // Return the updated document  
    runValidators: true, // Run Mongoose validation Zun
    })
    if(!response){
        return res.status(404).json({error : 'person not found'});
    }
    console.log('data updated');
    res.status(200).json(response);
}catch(err) {
    console.log(err);   
    res.status(500).json({error: 'Internal Server Error'});   
    }
})
router.delete('/:id', async (req, res) => {
    try{
    const personId = req.params.id; // Extract the person's ID from the URL parameter
    // Assuming you have a Person model
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
    return res.status(404).json({ error: 'Person not found' });
    }
    console.log('data delete');
    res.status(200).json({message: 'person Deleted Successfully'});
}catch (err) {
    console.error('Error occurred:', err.message, err.stack);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
}
})
  module.exports = router;